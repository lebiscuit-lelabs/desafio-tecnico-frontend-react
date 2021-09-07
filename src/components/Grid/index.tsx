import './styles.scss'

export type GridProps = {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return <div className="grid-wrapper">{children}</div>
}

export default Grid
