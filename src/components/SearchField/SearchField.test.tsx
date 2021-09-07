import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchField from '.'

describe('CharacterCard', () => {
  it('should render CharacterCard with placeholder', () => {
    render(<SearchField placeholder="Search by name or house" />)

    expect(
      screen.getByPlaceholderText(/Search by name or house/i)
    ).toBeInTheDocument()
  })

  it('should be accessible by tab', () => {
    render(<SearchField placeholder="Search by name or house" />)

    const searchText = screen.getByPlaceholderText(/Search by name or house/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(searchText).toHaveFocus()
  })
})
