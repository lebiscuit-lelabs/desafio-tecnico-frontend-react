import { render } from '@testing-library/react'
import Container from '.'

describe('Container', () => {
  it('should render Container Component', () => {
    const { container } = render(<Container>Content</Container>)

    expect(container.firstChild).toHaveTextContent('Content')

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container-page"
      >
        Content
      </div>
    `)
  })
})
