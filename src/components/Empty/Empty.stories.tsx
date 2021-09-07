import { Meta, Story } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'A Simple title',
    description: 'A Simple description'
  }
} as Meta

export const Basic: Story<EmptyProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <Empty {...args} />
  </div>
)
