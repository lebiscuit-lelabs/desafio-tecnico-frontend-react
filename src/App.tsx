import Cart from 'components/Cart'
import CharacterCard, { CharacterCardProps } from 'components/CharacterCard'
import Container from 'components/Container'
import Empty from 'components/Empty'
import Grid from 'components/Grid'
import Houses from 'components/Houses'
import SkeletonLoader from 'components/SkeletonLoader'
import { useCharacter } from 'hooks/useCharacter'
import { useHouses } from 'hooks/useHouses'
import { CharacterStore, useCharacterStore } from 'store/characters'
import Base from 'templates/Base'

const App: React.FC = () => {
  const {
    searchTerm,
    house,
    isLoading,
    characters: charactersStore
  } = useCharacterStore((store: CharacterStore) => store.state)

  const { setHouse, setIsLoading, addCharacter } = useCharacterStore(
    (store: CharacterStore) => store.actions
  )

  const { houses } = useHouses()
  const { characters } = useCharacter(house, searchTerm)

  const houseSelected = (house: string) => {
    setIsLoading(true)
    setHouse(house)
  }

  const handleAddToCart = (character: CharacterCardProps) => {
    addCharacter(character)
  }

  return (
    <Base>
      <Houses items={houses} onSelect={houseSelected} />

      <Container>
        {isLoading ? (
          <Grid>
            {[1, 2, 3, 4].map(() => (
              <SkeletonLoader key={Math.random()} />
            ))}
          </Grid>
        ) : (
          <>
            {!!characters && characters.length > 0 ? (
              <Grid>
                {characters?.map((character, index) => (
                  <CharacterCard
                    key={index}
                    {...character}
                    onCharacterAdd={() => handleAddToCart(character)}
                  />
                ))}
              </Grid>
            ) : (
              <Empty
                title="There's no characters found"
                description="Apply the filter clicking in the House above or Typing in the Search Field"
              />
            )}
          </>
        )}
      </Container>

      <Cart characters={charactersStore} />
    </Base>
  )
}

export default App
