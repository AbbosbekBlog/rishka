import React from 'react'
import './category.css'
import Card from '../card/Card'
import { categoryDataItems } from '../data/data'
import rightIcon from '../Image/right.svg'
import Footer from '../footer/Footer'

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="link_category">
          <img src={rightIcon} alt="rightIcon" />
          <p>Назад в каталог</p>
        </div>
        <div className="category_cards">
          <div className="category_title_items">Рекомендуем попробовать</div>
          <Card slayder1={categoryDataItems} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Category
