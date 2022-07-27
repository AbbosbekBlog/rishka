import React, { Component } from 'react'
import Slider from 'react-slick'
import './TopCorusel.css'

function TopCorusel({ slayder1 }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="carousel__item">
      <Slider {...settings}>
        {slayder1?.map((slayderItem) => {
          return (
            <div className="corusel_container" key={slayderItem.id}>
              <img src={slayderItem.img} alt={slayderItem.title} />
              <div className="view">
                <div className="ostroe">
                  {slayderItem.imageText && (
                    <img src={slayderItem.image} alt={slayderItem.imageText} />
                  )}
                  {slayderItem.imageText && <p>{slayderItem.imageText}</p>}
                </div>
                <div className="hot">
                  {slayderItem.image2 && (
                    <img
                      src={slayderItem.image2}
                      alt={slayderItem.image2Text}
                    />
                  )}
                  {slayderItem.image2Text && <p>{slayderItem.image2Text}</p>}
                </div>
              </div>
              {slayderItem.top && <div className="top">{slayderItem.top}</div>}
              <div className="corusel_body">
                <div className="flex">
                  <p className="gramm">
                    {slayderItem.gramm} <span></span>
                    {slayderItem.kal}
                  </p>

                  <div className="centimeters">
                    <div className="centimeters_box">
                      {<div className="money">{slayderItem.yevro}</div>}
                      {slayderItem.sm && (
                        <div className="centimeters_left">{slayderItem.sm}</div>
                      )}
                      {slayderItem.cracle && <span>{slayderItem.cracle}</span>}
                      {slayderItem.sm2 && (
                        <div className="centimeters_right">
                          {slayderItem.sm2}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="title">{slayderItem.title}</h3>
                {slayderItem.text && (
                  <p className={slayderItem.text ? 'line__box' : ''}>
                    {slayderItem.text}
                  </p>
                )}
                {slayderItem.line && (
                  <p className={slayderItem.line ? 'underline' : ''}>
                    {slayderItem.line}
                  </p>
                )}
                <div className="order_box_item">
                  <div className="order__absolute">
                    {slayderItem.summaCenter}
                  </div>
                  <h2 className="summa_items">{slayderItem.summa}</h2>
                  <button>Заказать</button>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default TopCorusel
