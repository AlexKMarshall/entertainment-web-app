import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading } from './heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    level: { defaultValue: 1 },
  },
} as ComponentMeta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Large = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  level: 1,
  size: 'l',
  children: 'Lorem ipsum dolor sit',
}
export const Medium = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  level: 1,
  size: 'm',
  children: 'Consectetuer adipiscing elit',
}
export const Small = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  level: 1,
  size: 's',
  children: 'Donec odio quisque volutpat mattis eros',
}
