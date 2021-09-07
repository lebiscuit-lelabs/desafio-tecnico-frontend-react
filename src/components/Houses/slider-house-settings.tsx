import { SliderSettings } from 'components/Slider'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { CustomArrowProps } from 'react-slick'

const NextArrow = ({ ...props }: CustomArrowProps) => (
  <RiArrowRightSLine {...props} aria-label="next house" />
)

const PrevArrow = ({ ...props }: CustomArrowProps) => (
  <RiArrowLeftSLine {...props} aria-label="previous house" />
)

const settings: SliderSettings = {
  slidesToShow: 10,
  slidesToScroll: 10,
  infinite: false,
  vertical: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 10,
        slidesToScroll: 10
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

export default settings
