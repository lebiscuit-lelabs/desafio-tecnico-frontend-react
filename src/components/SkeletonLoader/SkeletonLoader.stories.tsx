import { Meta, Story } from '@storybook/react'
import Grid from 'components/Grid'
import SkeletonLoader from '.'

export default {
  title: 'SkeletonLoader',
  component: SkeletonLoader
} as Meta

export const Basic: Story = () => (
  <div style={{ margin: '2rem auto 0' }}>
    <Grid>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </Grid>
  </div>
)
