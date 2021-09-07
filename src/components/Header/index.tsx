import SearchField from 'components/SearchField'
import useDebounce from 'hooks/useDebounce'
import { FaShoppingCart } from 'react-icons/fa'
import { CharacterStore, useCharacterStore } from 'store/characters'
import './styles.scss'

const Header = () => {
  const { characters } = useCharacterStore(
    (store: CharacterStore) => store.state
  )
  const { setSearchTerm, setCartOpened } = useCharacterStore(
    (store: CharacterStore) => store.actions
  )

  const debounce = useDebounce(setSearchTerm, 600)

  const onInput = (value?: any) => {
    debounce(value)
  }

  return (
    <header className="header-content">
      <SearchField
        placeholder="Search by character Name..."
        onInput={onInput}
      />

      <div
        className="shopping-cart-content"
        onClick={() => setCartOpened(true)}
      >
        <div className="cart-items">{characters?.length}</div>
        <FaShoppingCart size={18} />
        Cart
      </div>
    </header>
  )
}

export default Header
