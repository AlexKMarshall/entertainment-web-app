import '../app/styles/reset.css'
import '../app/styles/global.css'
import '../app/styles/utilities.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: 'hsl(223deg 30% 9%)' }],
  },
  chromatic: { viewports: [375, 768, 1440] },
}
