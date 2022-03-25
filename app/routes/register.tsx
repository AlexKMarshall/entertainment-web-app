import { Form, Link, LinksFunction } from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'

import { LogoIcon } from '~/components/icons'
import styles from '~/styles/routes/login.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...headingLinks(),
]

export default function RegisterPage(): JSX.Element {
  return (
    <main>
      <LogoIcon className="logo" />
      <Form>
        <Heading level={1} size="l">
          Sign Up
        </Heading>
        <div className="stack">
          <label>
            <span className="visually-hidden">Email Address</span>
            <input type="email" name="email" placeholder="Email Address" />
          </label>
          <label>
            <span className="visually-hidden">Password</span>
            <input type="password" name="password" placeholder="Password" />
          </label>
          <label>
            <span className="visually-hidden">Repeat Password</span>
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
            />
          </label>
        </div>
        <div className="stack">
          <button type="submit">Create an account</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}
