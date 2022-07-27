import React from 'react'
import logo from '../Image/logo.svg'
import '../Navbar/Navbar.css'
import { foot } from '../data/data'
import { NavLink } from 'react-router-dom'

import { BsFillTelephoneFill, BsBagFill, BsPersonFill } from 'react-icons/bs'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo_box">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <NavLink className="Navlink" to="/">
            О нас
          </NavLink>
          <NavLink className="Navlink" to="/dastabka">
            Доставка и оплата
          </NavLink>
          <NavLink className="Navlink" to="/kantact">
            Контакты
          </NavLink>
          <NavLink className="Navlink" to="/bonus">
            Бонусы
          </NavLink>
          <NavLink className="Navlink" to="/vakansia">
            Вакансии
          </NavLink>
        </ul>
        <div className="phone_number">
          <div className="phone">
            <BsFillTelephoneFill className="icon" />
            <p>+7 (495) 617-14-24</p>
          </div>
          <div className="clock">c 10:00 до 23:00</div>
        </div>
        <div className="shopping">
          <div className="summa">
            <p>0 ₽</p>

            <div>
              <BsBagFill className="icon" />
              <div id="nol">0</div>
            </div>
          </div>
          <div className="person">
            <BsPersonFill className="icon" />
          </div>
        </div>
      </nav>
      <div className="product_image">
        {foot?.map((footItem) => {
          return (
            <div className="praduct_item" key={footItem.id}>
              <div className="image_box">{footItem.img}</div>
              <div className="image_name">{footItem.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
