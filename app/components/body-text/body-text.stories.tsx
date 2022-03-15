import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BodyText } from './body-text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/BodyText',
  component: BodyText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BodyText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BodyText> = (args) => (
  <BodyText {...args} />
)

export const Medium = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  size: 'm',
  children: 'Lorem ipsum dolor sit',
}
export const Small = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: 's',
  children: 'Consectetuer adipiscing elit',
}
