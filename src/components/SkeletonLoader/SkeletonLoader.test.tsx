import { render } from '@testing-library/react'
import SkeletonLoader from '.'

describe('Skeleton', () => {
  it('should render Skeleton', () => {
    const { container } = render(
      <div>
        {[1, 2, 3].map(() => (
          <SkeletonLoader key={Math.random()} />
        ))}
      </div>
    )

    expect(container?.firstChild?.childNodes.length).toBe(3)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <div
          class="skeleton-loader"
        />
        <div
          class="skeleton-loader"
        />
        <div
          class="skeleton-loader"
        />
      </div>
    `)
  })
})
