import React, { useState } from 'react'
import { free, slayder1, slayder2, pizzaData, footCard } from '../data/data'
import './Home.css'
import leftIcon from '../Image/leftIcon.png'
import lineRight from '../Image/lineRight.svg'
import { BsInstagram } from 'react-icons/bs'

import TopCorusel from '../Corusel/TopCorusel'
import {
  Title1,
  Pizza,
  Sushi,
  Polli,
  Ceti,
  Wok,
  Soup,
  Calat,
  Detsert,
  Tea,
  Gif,
} from '../SvgImage/svg'
import Title from '../Navbar/Title'
import komboTitle from '../Image/komboTitle.png'
import tree from '../Image/tree.png'
import stockimage from '../Image/stockimage.png'
import wave from '../Image/wave.png'
import birthday from '../Image/birthday.png'
import orders from '../Image/orders.png'
import offer from '../Image/offer.png'
import category from '../Image/category.png'
import Card from '../card/Card'
import Compony from '../compony/Compony'
import Corusel from '../Corusel/Corusel'
import Footer from '../footer/Footer'
const dataNumber = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 4 },
]

function Home() {
  const [tabs, setTabs] = useState(1)
  const [numbers, setNumbers] = useState(0)

  const toggle = (index) => {
    setTabs(index)
  }

  return (
    <div className="home_box">
      <div className="container">
        <Corusel />
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
      <div className="combo__menu">
        <div className="container">
          <Title img={komboTitle} alt="kombo" title="Комбо меню" />

          <TopCorusel slayder1={slayder2} {...slayder2} />
        </div>
      </div>
      <div className="stock__box">
        <img src={tree} alt="tree" className="tree_image" />
        <div className="container strok_padding">
          <Title img={stockimage} alt="Акции" title="Акции" />
          <div className="congratulations_box">
            <div className="congratulations">
              <div className="congratulations_text">
                Празднуй день рождения вместе с нами
              </div>
              <p>Ролл в подарок при заказе в день рождения</p>
              <img src={wave} alt="wave" className="wave" />
              <img src={birthday} alt="birthday" className="birthday" />
            </div>
            <div className="congratulations">
              <div className="congratulations_text">
                Доставим заказ за 60 мин
              </div>
              <p>или проморол за опоздание</p>

              <img src={wave} alt="wave" className="wave" />
              <img src={orders} alt="birthday" className="birthday" />
            </div>
            <div className="congratulations">
              <div className="congratulations_text">Приведи друга</div>
              <p>и получи 250 ₽ на бонусный счет</p>
              <img src={wave} alt="wave" className="wave" />
              <img src={offer} alt="birthday" className="birthday" />
            </div>
          </div>
          <div className="category__title">
            <Title img={category} alt="Категории" title="Категории" />
          </div>

          <div className="category_items">
            <div
              className={`tabs_content ${tabs === 1 ? 'active__tabs' : ''}`}
              onClick={() => toggle(1)}
            >
              <Pizza />
              <p>Пицца</p>
            </div>
            <div
              className={`tabs_content ${tabs === 2 ? 'active__tabs' : ''}`}
              onClick={() => toggle(2)}
            >
              <Sushi />
              <p>Суши</p>
            </div>
            <div
              className={`tabs_content ${tabs === 3 ? 'active__tabs' : ''}`}
              onClick={() => toggle(3)}
            >
              <Polli />
              <p>Роллы</p>
            </div>
            <div
              className={`tabs_content ${tabs === 4 ? 'active__tabs' : ''}`}
              onClick={() => toggle(4)}
            >
              <Ceti />
              <p>Сеты</p>
            </div>
            <div
              className={`tabs_content ${tabs === 5 ? 'active' : ''}`}
              onClick={() => toggle(5)}
            >
              <Wok />
              <p>Wok</p>
            </div>
            <div
              className={`tabs_content ${tabs === 6 ? 'active' : ''}`}
              onClick={() => toggle(6)}
            >
              <Soup />
              <p>Супы</p>
            </div>
            <div
              className={`tabs_content ${tabs === 7 ? 'active' : ''}`}
              onClick={() => toggle(7)}
            >
              <Calat />
              <p>Салаты</p>
            </div>
            <div
              className={`tabs_content ${tabs === 8 ? 'active' : ''}`}
              onClick={() => toggle(8)}
            >
              <Detsert />
              <p>Десерты</p>
            </div>
            <div
              className={`tabs_content ${tabs === 9 ? 'active' : ''}`}
              onClick={() => toggle(9)}
            >
              <Tea />
              <p>Tea</p>
            </div>
            <div
              className={`tabs_content ${tabs === 10 ? 'active' : ''}`}
              onClick={() => toggle(10)}
            >
              <Gif />
              <p>Акции</p>
            </div>
          </div>
          <div className={`tabs_col_4 ${tabs === 1 ? 'tab__block' : ''}`}>
            <Card slayder1={pizzaData} />
            <div className="pogenation_box">
              <div className="pogenation_left">
                <img src={leftIcon} alt="leftIcon" />
                <div className="numbers_box_row">
                  {dataNumber?.map((numberItem, i) => {
                    return (
                      <div className="numbers_box" key={numberItem.id}>
                        <p
                          className={`default_number ${
                            numbers === i ? 'number__active' : ''
                          }`}
                          onClick={() => setNumbers(i)}
                        >
                          {numberItem.number}
                        </p>
                      </div>
                    )
                  })}
                  <img src={lineRight} id="right_icon" alt={lineRight} />
                </div>
              </div>
              <div className="pogenation_right">
                <p>Перейти в каталог</p>
                <img src={lineRight} alt={lineRight} />
              </div>
            </div>
          </div>
          <div className={`tabs_col_4 ${tabs === 2 ? 'tab__block' : ''}`}>
            <h1>qalesan</h1>
          </div>
          <Compony />
          {/* instagrammga obuna bo'lish */}
          <div className="to_subscribe">
            <div className="subscribe__title">
              <h4>
                А вы уже подписались на наш <span>Instagram?</span>
              </h4>
            </div>
            <div className="subscribe_btn">
              <BsInstagram className="subscribe_btn_icons" />{' '}
              <p>@riksha_sushi</p>
            </div>
          </div>
          <div className="grid__image__box">
            {footCard?.map((footCardItem, i) => {
              return <img src={footCardItem.img} alt="image" key={i} />
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
