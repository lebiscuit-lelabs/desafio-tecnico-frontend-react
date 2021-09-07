import Header from 'components/Header'
import './styles.scss'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  return (
    <main>
      <Header />
      <div className="content-base">{children}</div>
    </main>
  )
}

export default Base
