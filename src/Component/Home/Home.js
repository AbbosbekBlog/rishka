import React from 'react'
import { free, slayder1 } from '../data/data'
import './Home.css'
import TopCorusel from '../Corusel/TopCorusel'
import { Title1 } from '../SvgImage/svg'

function Home() {
  return (
    <>
      <div className="container">
        <div className="home">
          <div className="service-box">
            {free?.map((freeItem) => {
              return (
                <div className="service" key={freeItem?.id}>
                  <div className="service_title">{freeItem.title}</div>
                  <div className="cracle">
                    <div>{freeItem.product}</div>
                  </div>
                  <p>{freeItem.text}</p>
                  <div className="service_summa">{freeItem.summa}</div>
                </div>
              )
            })}
          </div>
          <div className="corusel_title1">
            <Title1 />

            <h2>Топ позиции</h2>
            <h2> Новинки</h2>
          </div>

          <TopCorusel slayder1={slayder1} {...slayder1} />
        </div>
      </div>
      <div className="combo__menu"></div>
    </>
  )
}

export default Home
