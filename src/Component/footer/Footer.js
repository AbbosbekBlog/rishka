import React from 'react'
import './footer.css'
import logo from '../Image/footerLogo.svg'
import { FooterVk, FooterInstagram, FooterFacebook } from '../SvgImage/svg'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__row">
          <div className="footer_left">
            <img src={logo} alt="logo" />
            <div className="footer_left_link">
              <ul>
                <li>О нас</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li>
              </ul>
              <div className="footer_left_icon">
                <FooterFacebook />
                <FooterInstagram />
                <FooterVk />
              </div>
            </div>
          </div>
          <div className="footer_center">
            <ul className="footer_center_top_link">
              <li>Пицца</li>
              <li>Суши</li>
              <li>Роллы</li>
              <li>Сеты</li>
              <li>Wok</li>
            </ul>
            <ul className="footer_center_bottom_link">
              <li>Супы</li>
              <li>Салаты</li>
              <li>Десерты</li>
              <li>Напитки</li>
              <li>Акции</li>
            </ul>
          </div>
          <div className="footer_right">
            <h1 className="footer_right_number">+7 (495) 617-14-24</h1>
            <p className="chass"> c 10:00 до 23:00</p>
            <p className="buttom">© Рикша. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
