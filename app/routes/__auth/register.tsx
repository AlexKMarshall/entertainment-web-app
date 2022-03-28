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

import { BodyText } from '~/components/body-text'
import { LogoIcon } from '~/components/icons'
import { z } from 'zod'

export const links: LinksFunction = () => [...headingLinks()]

const registerFormSchema = z
  .object({
    email: z.string().email('Invalid email').nonempty("Can't be empty"),
    password: z.string().nonempty("Can't be empty"),
    confirmPassword: z.string().nonempty("Can't be empty"),
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
        <div>
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
          <div id="username-error" aria-live="polite" className="error">
            {actionData?.fieldErrors?.email?.map((error) => (
              <BodyText size="s" color="error" key={error}>
                {error}
              </BodyText>
            ))}
          </div>
        </div>
        <div>
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
          <div id="password-error" aria-live="polite" className="error">
            {actionData?.fieldErrors?.password?.map((error) => (
              <BodyText size="s" color="error" key={error}>
                {error}
              </BodyText>
            ))}
          </div>
        </div>
        <div>
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
          <div id="confirm-password-error" aria-live="polite" className="error">
            {actionData?.fieldErrors?.confirmPassword?.map((error) => (
              <BodyText size="s" color="error" key={error}>
                {error}
              </BodyText>
            ))}
          </div>
        </div>
      </div>
      <div className="stack">
        <button type="submit">Create an account</button>
        <p>
          Already have an account? <Link to={loginHref}>Login</Link>
        </p>
      </div>
    </Form>
  )
}
