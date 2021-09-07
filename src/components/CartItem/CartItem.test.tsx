import { fireEvent, render, screen } from '@testing-library/react'
import CartItem, { CartItemProps } from '.'
import cartItemMock from './mock'

const props: CartItemProps = {
  character: cartItemMock
}

describe('CartIem', () => {
  it('should render CartIem', () => {
    render(<CartItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.character.name })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      props.character.image
    )

    expect(screen.getByText(/male/i)).toBeInTheDocument()
  })

  it('should call onRemoveCharacter when remove-character button is clicked', () => {
    const onRemoveCharacter = jest.fn()

    render(<CartItem {...props} onRemoveCharacter={onRemoveCharacter} />)

    const removeCharacter = screen.getByTestId('remove-character')

    fireEvent.click(removeCharacter)

    expect(onRemoveCharacter).toHaveBeenCalledTimes(1)
  })
})
