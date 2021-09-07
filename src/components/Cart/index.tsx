import CartItem from 'components/CartItem'
import { CharacterCardProps } from 'components/CharacterCard'
import { useEffect } from 'react'
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi'
import { MdClear } from 'react-icons/md'
import { useCharacterStore } from 'store/characters'
import './styles.scss'

export type CartProps = {
  characters: CharacterCardProps[]
}

const Cart = ({ characters }: CartProps) => {
  const { cartOpened } = useCharacterStore((store) => store.state)
  const { setCartOpened, removeCharacter } = useCharacterStore(
    (store) => store.actions
  )

  useEffect(() => {
    const onHandleCloseCart = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCartOpened(false)
      }
    }

    window.addEventListener('keyup', onHandleCloseCart)

    return () => {
      window.removeEventListener('keyup', onHandleCloseCart)
    }
  }, [])

  return (
    <div data-testid="cart" className={`cart ${cartOpened ? 'is-open' : ''}`}>
      <header className="cart__header">
        {characters.length <= 0 && <HiOutlineShoppingCart color="#fff" />}
        {characters.length > 0 && <HiShoppingCart color="#fff" />}
        <span className="cart__title">My Cart</span>

        <MdClear
          className="close-cart"
          aria-label="close cart"
          color="#fff"
          onClick={() => setCartOpened(false)}
        />
      </header>

      <section className="cart__body">
        {characters.map((character) => (
          <CartItem
            key={character._id}
            character={character}
            onRemoveCharacter={() => removeCharacter(character)}
          />
        ))}
      </section>
    </div>
  )
}

export default Cart
