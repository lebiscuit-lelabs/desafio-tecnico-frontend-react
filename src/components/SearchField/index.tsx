import { InputHTMLAttributes, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.scss'

export type SearchFieldProps = {
  placeholder: string
  onInput?: (value?: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const SearchField = ({ onInput, ...props }: SearchFieldProps) => {
  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    setValue(newValue)

    if (onInput) {
      onInput(newValue)
    }
  }

  return (
    <div className="wrapper">
      <input
        className="input-search"
        value={value}
        type="search"
        onChange={onChange}
        {...props}
      />

      <FiSearch width={30} color="#3A4750" />
    </div>
  )
}

export default SearchField
