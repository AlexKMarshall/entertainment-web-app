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
import { createUserSession, login } from '~/utils/session.server'

import { LogoIcon } from '~/components/icons'
import styles from '~/styles/routes/login.css'
import { z } from 'zod'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...headingLinks(),
]

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  redirectTo: z.string(),
})

type FormDataErrors = z.inferFlattenedErrors<typeof loginFormSchema>
type FormData = z.infer<typeof loginFormSchema>

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
    typeof form.redirectTo !== 'string'
  ) {
    return badRequest({ formErrors: ['Form not submitted correctly'] })
  }

  const fields = {
    email: form.email,
    password: form.password,
    redirectTo: form.redirectTo,
  }

  const parsedForm = loginFormSchema.safeParse(form)

  if (!parsedForm.success) {
    return badRequest({ ...parsedForm.error.flatten(), fields })
  }
  const { email, password, redirectTo } = parsedForm.data

  const user = await login({ email, password })

  if (!user) {
    return badRequest({
      fields,
      formErrors: ['Email/Password combination is incorrect'],
    })
  }

  return createUserSession(user.id, redirectTo)
}

export default function LoginPage(): JSX.Element {
  const actionData = useActionData<ActionData>()
  const [searchParams] = useSearchParams()
  const registerHref =
    searchParams.values.length > 0
      ? `/register?${searchParams.toString}`
      : '/register'

  return (
    <main>
      <LogoIcon className="logo" />
      <Form method="post" noValidate>
        <Heading level={1} size="l">
          Login
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
        </div>
        <div className="stack">
          <button type="submit">Login to your account</button>
          <p className="align-self-center">
            Don't have an account? <Link to={registerHref}>Sign Up</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}
