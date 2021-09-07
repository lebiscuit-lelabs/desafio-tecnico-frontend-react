import { CharacterCardProps } from 'components/CharacterCard'
import { MdClear } from 'react-icons/md'
import './styles.scss'

export type CartItemProps = {
  character: CharacterCardProps
  onRemoveCharacter?: () => void
}

const CartItem = ({ character, onRemoveCharacter }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={character.image}
        alt={character.name}
      />

      <div className="cart-item__info">
        <h3>{character.name}</h3>
        <span>{character.gender}</span>
      </div>

      <MdClear
        data-testid="remove-character"
        className="cart-item__remove"
        onClick={onRemoveCharacter}
      />
    </div>
  )
}

export default CartItem
