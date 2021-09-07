import { Meta, Story } from '@storybook/react'
import CartItem, { CartItemProps } from '.'
import cartItemMock from './mock'

export default {
  title: 'CartItem',
  component: CartItem,
  args: {
    character: cartItemMock
  },
  argTypes: {
    character: {
      type: ''
    },
    onRemoveCharacter: {
      action: 'clicked'
    }
  }
} as Meta

export const Basic: Story<CartItemProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <CartItem {...args} />
  </div>
)
