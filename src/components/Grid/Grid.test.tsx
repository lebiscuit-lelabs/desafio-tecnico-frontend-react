import { render } from '@testing-library/react'
import Grid from '.'

describe('Grid', () => {
  it('should render Grid component', () => {
    const { container } = render(<Grid>Grid content</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid-wrapper"
      >
        Grid content
      </div>
    `)
  })
})
