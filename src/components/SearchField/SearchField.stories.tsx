import { Meta, Story } from '@storybook/react'
import SearchField from '.'

export default {
  title: 'SearcField',
  component: SearchField,
  args: {}
} as Meta

export const Basic: Story = () => (
  <div style={{ maxWidth: '58.2rem', margin: '2rem auto 0' }}>
    <SearchField placeholder="Search by name or house" />
  </div>
)
