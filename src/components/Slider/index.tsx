import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import './styles.scss'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <section className="wrapper-slick">
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </section>
  )
}

export default forwardRef(Slider)
