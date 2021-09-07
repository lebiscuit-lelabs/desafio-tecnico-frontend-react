import { fireEvent, render, screen } from '@testing-library/react'
import CharacterCard, { CharacterCardProps } from '.'

const props: CharacterCardProps = {
  _id: '1',
  name: 'Character Name',
  titles: ['a simple title 1', 'a simple title 2'],
  gender: 'Gender',
  image: 'https://via.placeholder.com/300'
}

describe('CharacterCard', () => {
  it('should render CharacterCard', () => {
    render(<CharacterCard {...props} alive />)

    expect(
      screen.getByRole('heading', { name: /character name/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /character name/i })
    ).toHaveAttribute('src', props.image)

    expect(
      screen.getByText(/a simple title 1, a simple title 2/i)
    ).toBeInTheDocument()

    expect(screen.getByText(/gender/i)).toBeInTheDocument()

    expect(screen.getByText(/is alive: yes/i)).toBeInTheDocument()
  })

  it('should render a Character with isAlive No', () => {
    render(<CharacterCard {...props} />)

    expect(screen.getByText(/is alive: no/i)).toBeInTheDocument()
  })

  it('should call onCharacterAdd when Add button is clicked', () => {
    const onCharacterAdd = jest.fn()

    render(<CharacterCard {...props} onCharacterAdd={onCharacterAdd} />)

    const character = screen.getByRole('button', { name: /add/i })

    fireEvent.click(character)

    expect(onCharacterAdd).toHaveBeenCalledTimes(1)
  })
})
