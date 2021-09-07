import Slider from 'components/Slider'
import sliderHouseSettings from './slider-house-settings'
import './styles.scss'

export type House = {
  name: string
  active?: boolean
}

export type HousesProps = {
  items?: House[]
  onSelect?: (house: string) => void
}

const Houses = ({ items, onSelect }: HousesProps) => {
  const onHouseSelect = (house: House) => {
    if (onSelect) {
      items?.map((item) => (item.active = false))
      house.active = true
      onSelect(house.name)
    }
  }

  return (
    <div className="wrapper-house">
      {!!items && items?.length > 0 && (
        <Slider settings={sliderHouseSettings}>
          {items?.map((house, index) => (
            <div
              key={index}
              className="house"
              onClick={() => onHouseSelect(house)}
            >
              <span className={`${house.active ? 'is-active' : ''}`}>
                {house.name}
              </span>
            </div>
          ))}
        </Slider>
      )}
    </div>
  )
}

export default Houses
