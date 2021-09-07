import { render } from '@testing-library/react'
import { act as hooksAct, renderHook } from '@testing-library/react-hooks'
import cartItemsMock from 'components/CharacterCard/mock'
import { useCharacterStore } from 'store/characters'
import Cart, { CartProps } from '.'

const props: CartProps = {
  characters: cartItemsMock
}

describe('Cart', () => {
  it('should render Cart', () => {
    const { container } = render(<Cart {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should have is-open class when open the cart', () => {
    const result = renderHook(() => useCharacterStore()).result
    const setCartOpen = result.current.actions.setCartOpened

    const { container } = render(<Cart {...props} />)

    hooksAct(() => setCartOpen(true))

    expect(container.firstChild).toHaveClass('cart is-open')
  })

  it('should not have is-open class when close the cart', () => {
    const result = renderHook(() => useCharacterStore()).result
    const setCartOpen = result.current.actions.setCartOpened

    const { container } = render(<Cart {...props} />)

    hooksAct(() => setCartOpen(false))

    expect(container.firstChild).not.toHaveClass('cart is-open')
  })
})
