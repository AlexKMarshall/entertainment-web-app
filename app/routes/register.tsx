import {
  ActionFunction,
  Form,
  Link,
  LinksFunction,
  json,
  useActionData,
  useSearchParams,
} from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { createUserSession, register } from '~/utils/session.server'

import { LogoIcon } from '~/components/icons'
import styles from '~/styles/routes/login.css'
import { z } from 'zod'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...headingLinks(),
]

const registerFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5),
    confirmPassword: z.string().min(5),
    redirectTo: z.string(),
  })
  .refine((obj) => obj.password === obj.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof registerFormSchema>
type FormDataErrors = z.inferFlattenedErrors<typeof registerFormSchema>

type ActionData = FormDataErrors & {
  fields?: FormData
}

const badRequest = ({
  fieldErrors = {},
  formErrors = [],
  fields,
}: Partial<ActionData> = {}) =>
  json({ fieldErrors, formErrors, fields }, { status: 400 })

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const form = Object.fromEntries(formData.entries())

  if (
    typeof form.email !== 'string' ||
    typeof form.password !== 'string' ||
    typeof form.confirmPassword !== 'string' ||
    typeof form.redirectTo !== 'string'
  ) {
    return badRequest({ formErrors: ['Form not submitted correctly'] })
  }
  const fields = {
    email: form.email,
    password: form.password,
    confirmPassword: form.confirmPassword,
    redirectTo: form.redirectTo,
  }

  const parsedForm = registerFormSchema.safeParse(form)

  if (!parsedForm.success) {
    return badRequest({ ...parsedForm.error.flatten(), fields })
  }
  const { email, password, redirectTo } = parsedForm.data

  const user = await register({ email, password })

  if (!user) {
    return badRequest({
      fields,
      formErrors: ['Error creating user'],
    })
  }

  return createUserSession(user.id, redirectTo)
}

export default function RegisterPage(): JSX.Element {
  const actionData = useActionData<ActionData>()
  const [searchParams] = useSearchParams()
  const loginHref =
    searchParams.values.length > 0
      ? `/login?${searchParams.toString}`
      : '/login'
  return (
    <main>
      <LogoIcon className="logo" />
      <Form method="post" noValidate>
        <Heading level={1} size="l">
          Sign Up
        </Heading>
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get('redirectTo') ?? undefined}
        />
        <div className="stack">
          <label>
            <span className="visually-hidden">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              defaultValue={actionData?.fields?.email}
              aria-invalid={Boolean(actionData?.fieldErrors.email?.length)}
              aria-errormessage={
                actionData?.fieldErrors.email?.length
                  ? 'email-error'
                  : undefined
              }
            />
          </label>
          {actionData?.fieldErrors.email?.length ? (
            <div id="username-error" role="alert">
              {actionData.fieldErrors.email.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
          <label>
            <span className="visually-hidden">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={actionData?.fields?.password}
              aria-invalid={Boolean(actionData?.fieldErrors.password?.length)}
              aria-errormessage={
                actionData?.fieldErrors.password?.length
                  ? 'password-error'
                  : undefined
              }
            />
          </label>
          {actionData?.fieldErrors.password?.length ? (
            <div id="password-error" role="alert">
              {actionData.fieldErrors.password.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
          <label>
            <span className="visually-hidden">Repeat Password</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat Password"
              defaultValue={actionData?.fields?.confirmPassword}
              aria-invalid={Boolean(
                actionData?.fieldErrors.confirmPassword?.length
              )}
              aria-errormessage={
                actionData?.fieldErrors.confirmPassword?.length
                  ? 'confirm-password-error'
                  : undefined
              }
            />
          </label>
          {actionData?.fieldErrors.confirmPassword?.length ? (
            <div id="confirm-password-error" role="alert">
              {actionData.fieldErrors.confirmPassword.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="stack">
          <button type="submit">Create an account</button>
          <p>
            Already have an account? <Link to={loginHref}>Login</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}
