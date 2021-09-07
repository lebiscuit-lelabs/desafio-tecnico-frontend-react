import imgEmpty from 'assets/images/theres-no-characters.gif'
import './styles.scss'

export type EmptyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmptyProps) => {
  return (
    <div className="empty">
      <img
        className="empty__img"
        src={imgEmpty}
        alt="A person shaking the head"
      />

      <h3 className="empty__title">{title}</h3>
      <p className="empty__description">{description}</p>
    </div>
  )
}

export default Empty
