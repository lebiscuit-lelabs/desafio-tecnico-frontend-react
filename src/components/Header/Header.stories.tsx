import { Meta, Story } from '@storybook/react'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  args: {}
} as Meta

export const Basic: Story = () => (
  <div style={{ margin: '2rem auto 0' }}>
    <Header />
  </div>
)
