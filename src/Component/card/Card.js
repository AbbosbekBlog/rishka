import React from 'react'

function Card({ slayder1 }) {
  return (
    <div className="tabs__row">
      {slayder1?.map((slayderItem) => {
        return (
          <div className="corusel_container" key={slayderItem.id}>
            <img
              src={slayderItem.img}
              alt={slayderItem.title}
              className="img__col_4"
            />
            <div className="view">
              <div className="ostroe">
                {slayderItem.imageText && (
                  <img src={slayderItem.image} alt={slayderItem.imageText} />
                )}
                {slayderItem.imageText && <p>{slayderItem.imageText}</p>}
              </div>
              <div className="hot">
                {slayderItem.image2 && (
                  <img src={slayderItem.image2} alt={slayderItem.image2Text} />
                )}
                {slayderItem.image2Text && <p>{slayderItem.image2Text}</p>}
              </div>
            </div>
            {slayderItem.top && <div className="top">{slayderItem.top}</div>}
            {slayderItem.new && (
              <div className="top new__lightblue">{slayderItem.new}</div>
            )}
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
                      <div className="centimeters_right">{slayderItem.sm2}</div>
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
                <div className="order__absolute">{slayderItem.summaCenter}</div>
                <h2 className="summa_items">{slayderItem.summa}</h2>
                <button>Заказать</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
