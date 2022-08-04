import React, { useState } from 'react'
import Card from '../card/Card'
import './sushi.css'
import { sushiCard, sushiData, sushiDataBottom } from '../data/data'
import componyImage from '../Image/componyImage.png'
import footImageCompony from '../Image/footImageCompony.png'
import Footer from '../footer/Footer'
import { NavLink } from 'react-router-dom'

function Sushi() {
  const [menyu, setMenyu] = useState(0)
  return (
    <div className="sushi_praduct">
      <div className="container">
        <div className="sushi_link">
          <NavLink to="/">Главная</NavLink>
          <p>//</p>
          <NavLink to="/sushi">Суши</NavLink>
        </div>
        <h1 className="sushi_title">Суши</h1>
        <div className="cushi_menyu">
          {sushiData?.map((sushiDataItem, i) => {
            return (
              <div
                className={`cushi_menyu_box ${
                  menyu === i ? 'cushi_menyu_active' : ' '
                }`}
                key={sushiDataItem.id}
                onClick={() => setMenyu(i)}
              >
                <img src={sushiDataItem.img} alt={sushiDataItem.alt} />
                <p>{sushiDataItem.name}</p>
              </div>
            )
          })}
        </div>
        <div className="cushi___menyu__row">
          <div className="cushi___menyu">
            {sushiDataBottom?.map((sushiData2) => {
              return (
                <div className="cushi_menyu_box2" key={sushiData2.id}>
                  <img src={sushiData2.img} alt={sushiData2.alt} />
                  <p>{sushiData2.name}</p>
                </div>
              )
            })}
          </div>
          <div className="sushi_dropdown">
            <p>Сортировка</p>
            <select>
              <option value="1">По умолчанию</option>
              <option value="2">нармаль </option>
              <option value="3">очень сильный</option>
              <option value="4">смешанный</option>
            </select>
          </div>
        </div>
        <Card slayder1={sushiCard} />
        <div className="delivery_row">
          <div className="delivery_left">
            <h2>Доставка суши и роллов в Краснодаре</h2>
            <p>
              Почему роллы с океанической рыбой, овощами и японскими
              деликаттесами стали любимым блюдом многих россиян? Во-первых, это
              очень полезно. Суши – это идеально сбалансированная пища, многое
              на полезные жиры, белки и витамины. Во-вторых, суше хорошо утоляют
              голод.
            </p>
            <p>
              Вкусная доставка Рикша подарит Вам незабываемые вкусовые
              впечатления, украсит любой ваш стол и не заставит себя долго
              ждать. С нами вы сможете забыть о готовке, легко сделать приятное
              родным и близким, устроить вкусный праздник или расслабится в
              кругу друзей. Все блюда готовятся исключительно из свежих
              продуктов и по оригинальным рецептам Нашего шеф-повара.
            </p>
            <p>
              Любая позиция из Нашего Меню может оказаться у Вас на столе
              максимум через 60 минут! У вас есть возможность сделать
              предварительный заказ на определенный день и время.
            </p>
          </div>
          <div className="delivery_right">
            <img src={componyImage} alt="foot image" />
            <img src={footImageCompony} alt="foot image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sushi
