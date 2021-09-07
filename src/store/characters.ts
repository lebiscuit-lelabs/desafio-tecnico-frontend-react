import { CharacterCardProps } from 'components/CharacterCard'
import produce, { setAutoFreeze } from 'immer'
import create from 'zustand'

setAutoFreeze(false)

type InitialState = {
  characters: CharacterCardProps[]
  searchTerm: string
  house: string
  isLoading: boolean
  cartOpened: boolean
}

const initialState: InitialState = {
  characters: [],
  searchTerm: '',
  house: '',
  isLoading: false,
  cartOpened: false
}

type Actions = {
  addCharacter: (character: CharacterCardProps) => void
  setSearchTerm: (searchTerm: string) => void
  setHouse: (house: string) => void
  setIsLoading: (isLoading: boolean) => void
  setCartOpened: (cartOpened: boolean) => void
  removeCharacter: (character: CharacterCardProps) => void
}

export type CharacterStore = {
  state: InitialState
  actions: Actions
}

export const useCharacterStore = create<CharacterStore>((set) => {
  const setState = (fn: ({ state }: { state: any }) => void) => set(produce(fn))

  return {
    state: {
      ...initialState
    },
    actions: {
      addCharacter(character) {
        setState(({ state }) => {
          const characterFind = state.characters.find(
            ({ _id }: CharacterCardProps) => _id === character._id
          )

          if (!characterFind) {
            state.characters.push(character)
            state.character = state.characters.map(
              ({ _id }: CharacterCardProps) =>
                _id === character._id && (character.added = true)
            )
            character.added = true
          } else {
            character.added = false
            state.characters = state.characters.filter(
              ({ _id }: CharacterCardProps) => _id !== character._id
            )
          }
        })
      },
      setSearchTerm(searchTerm) {
        setState(({ state }) => {
          state.house = ''
          state.searchTerm = searchTerm
        })
      },
      setHouse(house) {
        setState(({ state }) => {
          state.searchTerm = ''
          state.house = house
        })
      },
      setIsLoading(isLoading) {
        setState(({ state }) => {
          state.isLoading = isLoading
        })
      },
      setCartOpened(cartOpened) {
        setState(({ state }) => {
          state.cartOpened = cartOpened
        })
      },
      removeCharacter(character) {
        setState(({ state }) => {
          state.characters = state.characters.filter(
            ({ _id }: CharacterCardProps) => _id !== character._id
          )

          character.added = false
        })
      }
    }
  } as CharacterStore
})
