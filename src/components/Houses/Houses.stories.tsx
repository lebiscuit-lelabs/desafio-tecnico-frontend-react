import { Meta, Story } from '@storybook/react'
import Houses, { HousesProps } from '.'
import mockHouses from './mock'

export default {
  title: 'Houses',
  component: Houses,
  args: {
    items: mockHouses
  },
  argTypes: {
    items: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<HousesProps> = (args) => (
  <div style={{ margin: '2rem auto 0' }}>
    <Houses {...args} />
  </div>
)
