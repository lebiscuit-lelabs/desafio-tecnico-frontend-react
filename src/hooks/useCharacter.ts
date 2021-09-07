import { CharacterCardProps } from 'components/CharacterCard'
import { useEffect, useState } from 'react'
import api from 'services/api'
import { useCharacterStore } from 'store/characters'
import { CharacterStore } from './../store/characters'

export function useCharacter(house = '', name = '') {
  const [characters, setCharacters] = useState<CharacterCardProps[]>()
  const { setIsLoading } = useCharacterStore(
    (store: CharacterStore) => store.actions
  )

  const { characters: charactersStore } = useCharacterStore(
    (store) => store.state
  )

  useEffect(() => {
    const getCharacters = async () => {
      try {
        if (name && name.length > 3) {
          await getCharacter(`/show/characters/${name}`)
        }

        if (house) {
          await getCharacter(`/show/characters/byHouse/${house}`)
        }
      } catch (error) {
        setIsLoading(false)
        setCharacters(undefined)
      }

      async function getCharacter(uri: string) {
        setIsLoading(true)
        const response = await api.get(`${uri}`)
        const data =
          Object.keys(response.data).length > 0 &&
          (response.data.length > 1 ? response.data : [response.data])

        const characters = data.map((character: CharacterCardProps) => ({
          name: character.name,
          image: character.image,
          titles: character.titles,
          alive: character.alive,
          gender: character.gender,
          _id: character._id,
          added: !!charactersStore.find(
            ({ _id }: CharacterCardProps) => _id === character._id
          )
        }))

        setIsLoading(false)
        setCharacters(characters)
      }
    }

    getCharacters()
  }, [house, name])

  return { characters }
}
