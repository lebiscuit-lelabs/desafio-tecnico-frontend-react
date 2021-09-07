import './styles.scss'

export type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container-page">{children}</div>
}

export default Container
