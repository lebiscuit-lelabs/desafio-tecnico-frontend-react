import { render, screen } from '@testing-library/react'
import Empty, { EmptyProps } from '.'

const props: EmptyProps = {
  title: 'a simple title',
  description: 'a simple description'
}

describe('Empty', () => {
  it('should render Empty Component', () => {
    render(<Empty {...props} />)

    expect(
      screen.getByRole('img', { name: /a person shaking the head/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()
  })
})
