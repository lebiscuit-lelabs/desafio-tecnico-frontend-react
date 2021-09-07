import { render, screen } from '@testing-library/react'
import Header from '.'

jest.mock('components/SearchField', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock search field"></div>
    }
  }
})

describe('CharacterCard', () => {
  it('should render CharacterCard with placeholder', () => {
    render(<Header />)

    expect(screen.getByTestId('mock search field')).toBeInTheDocument()
  })
})
