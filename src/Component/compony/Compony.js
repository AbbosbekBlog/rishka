import React from 'react'
import Title from '../Navbar/Title'
import './compony.css'
import componyIcon from '../Image/componyIcon.png'
import componyImage from '../Image/componyImage.png'
import footImageCompony from '../Image/footImageCompony.png'

export default function Compony() {
  return (
    <div className="compony__rows">
      <div className="compony_left">
        <Title alt="componyIcon" title="О компании" img={componyIcon} />
        <div className="compony_left_text">
          <p>
            Вкусная доставка Рикша подарит Вам незабываемые вкусовые
            впечатления, украсит любой ваш стол и не заставит себя долго ждать.
            С нами вы сможете забыть о готовке, легко сделать приятное родным и
            близким, устроить вкусный праздник или расслабится в кругу друзей.
            Все блюда готовятся исключительно из свежих продуктов и по
            оригинальным рецептам Нашего шеф-повара.
          </p>
          <p>
            Любая позиция из Нашего Меню может оказаться у Вас на столе максимум
            через 60 минут! У вас есть возможность сделать предварительный заказ
            на определенный день и время.
          </p>
        </div>
      </div>
      <div className="compony_right">
        <img src={componyImage} alt="image" />
        <img
          src={footImageCompony}
          alt="foot"
          className="compony_right_image_absolute"
        />
      </div>
    </div>
  )
}
