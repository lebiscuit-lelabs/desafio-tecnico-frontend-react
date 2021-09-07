import { Meta, Story } from '@storybook/react'
import cartItemMock from 'components/CartItem/mock'
import { CharacterStore, useCharacterStore } from 'store/characters'
import Cart, { CartProps } from '.'

export default {
  title: 'Cart',
  component: Cart,
  args: {
    characters: [cartItemMock, cartItemMock]
  },
  argTypes: {
    characters: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<CartProps> = (args) => {
  const { setCartOpened } = useCharacterStore(
    (store: CharacterStore) => store.actions
  )

  setCartOpened(true)

  return (
    <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
      <Cart {...args} />
    </div>
  )
}
