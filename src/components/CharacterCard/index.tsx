import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import './styles.scss'

export type CharacterCardProps = {
  _id: string
  image: string
  name: string
  titles: string[]
  gender: string
  alive?: boolean
  added?: boolean
  onCharacterAdd?: () => void
}

const CharacterCard = ({
  _id,
  image,
  name,
  titles,
  gender,
  alive = false,
  added = false,
  onCharacterAdd
}: CharacterCardProps) => {
  return (
    <div className="character" data-testid={`character_${_id}`}>
      <div className="image-box">
        <img className="character__avatar" src={image} alt={name} />
      </div>

      <h2 className="character__name">{name}</h2>
      <p className="character__description">{titles?.join(', ')}</p>
      <span className="character__gender">{gender}</span>

      <div className="character__footer">
        <span className="character__alive">
          is alive: {alive ? 'Yes' : 'No'}
        </span>

        <button
          className="btn-add-to-cart"
          type="button"
          onClick={onCharacterAdd}
        >
          {!added && <MdFavoriteBorder aria-label="icon favorite outline" />}
          {added && <MdFavorite aria-label="icon favorite" />}
          Add
        </button>
      </div>
    </div>
  )
}

export default CharacterCard
