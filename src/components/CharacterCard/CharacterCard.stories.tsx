import { Meta, Story } from '@storybook/react'
import CharacterCard, { CharacterCardProps } from '.'

export default {
  title: 'CharacterCard',
  component: CharacterCard,
  args: {
    name: 'Character Name',
    titles: ['Title 1', 'Title 2'],
    gender: 'Gender',
    alive: true,
    image: 'https://via.placeholder.com/300'
  }
} as Meta

export const Basic: Story<CharacterCardProps> = (args) => (
  <div style={{ maxWidth: '20rem', margin: '0 auto' }}>
    <CharacterCard {...args} />
  </div>
)
