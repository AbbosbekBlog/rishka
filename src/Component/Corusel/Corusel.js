import React from 'react'
import Slider from 'react-slick'
import './corusel.css'
import slayderImage from '../Image/slederImage.svg'

function Corusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="advertising">
      <Slider {...settings}>
        <div className="slider_item1">
          <div className="advertising_box">
            <div className="advertising_items">
              <h3>
                Калифорния <span> в подарок</span> при первом заказе
              </h3>
              <p>от 1500 ₽</p>
              <div className="more">Подробнее</div>
            </div>
            <div className="image__corusel">
              <img src={slayderImage} alt={'slider-image'} />
            </div>
          </div>
        </div>
        <div className="slider_item1 slider_item2">
          <div className="advertising_box advertising_box2">
            <div className="advertising_items">
              <h3>
                Калифорния <span> в подарок</span> при первом заказе
              </h3>
              <p>от 1500 ₽</p>
              <div className="more">Подробнее</div>
            </div>
            <div className="image__corusel">
              <h3 className="corusel_right_text">
                In some contexts, a welcome is
                <span> extended to a stranger to an area or</span> a household.
              </h3>
              <img src={slayderImage} alt={'slider-image'} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Corusel
