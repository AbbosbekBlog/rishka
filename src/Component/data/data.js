import React from 'react'
import Ostroe from '../Image/Ostroe.png'

import Hot from '../Image/Hot.png'
import Feladelfiya from '../Image/Feladelfiya.png'
import krvetka from '../Image/krvetka.png'
import kombo from '../Image/kombo.png'

import {
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
  // fee, dastabka
  Free,
  BagBlack,
  Dartavit,
  ClockBlock,
  Box,
  BlackGift,
  New,
  BlackFish,
} from '../SvgImage/svg'
export const foot = [
  { id: 1, img: <Pizza className="product_item_image" />, text: 'Пицца' },
  { id: 2, img: <Sushi className="product_item_image" />, text: 'Суши' },
  { id: 3, img: <Polli className="product_item_image" />, text: 'Роллы' },
  { id: 4, img: <Ceti className="product_item_image" />, text: 'Сеты' },
  { id: 5, img: <Wok className="product_item_image" />, text: 'Wok' },
  { id: 6, img: <Soup className="product_item_image" />, text: 'Супы' },
  { id: 7, img: <Calat className="product_item_image" />, text: 'Салаты' },
  { id: 8, img: <Detsert className="product_item_image" />, text: 'Десерты' },
  { id: 9, img: <Tea className="product_item_image" />, text: 'Напитки' },
  { id: 10, img: <Gif className="product_item_image" />, text: 'Акции' },
]
export const free = [
  {
    id: 1,
    title: <Free className="serviseItem" />,
    product: <BagBlack />,
    text: 'доставка',
    summa: 'при заказе от 600 ₽ ',
  },
  {
    id: 2,
    title: <Dartavit className="serviseItem" />,
    product: <ClockBlock />,
    text: 'за 60 мин',
    summa: 'или проморол за опоздание',
  },
  {
    id: 3,
    title: <Box className="serviseItem" />,
    product: <BlackGift />,
    text: 'бонусы',
    summa: 'бонусная система 1 ₽ = 1 бонус',
  },
  {
    id: 4,
    title: <New className="serviseItem" />,
    product: <BlackFish />,
    text: 'продукты',
    summa: 'Никаких заготовок!',
  },
]

// slayder 2 uchun
export const slayder1 = [
  {
    id: 1,
    image: Ostroe,
    imageText: 'Острое',
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: Feladelfiya,
    title: 'Ролл "Филадельфия"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '269 ₽',
    summa: '219 ₽ ',
    top: 'TOP',
    gramm: '200 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 2,

    image2: Hot,
    image2Text: 'Горячий ролл',
    img: krvetka,
    title: 'Ролл "Филадельфия"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '269 ₽',
    summa: '219 ₽ ',
    top: 'TOP',
    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 3,
    image: Ostroe,
    imageText: 'Острое',
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: Feladelfiya,
    title: 'Ролл "Чикен энд Чиз"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '232 ₽',
    summa: '199 ₽ ',
    top: 'TOP',
    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 4,
    image: Ostroe,
    imageText: 'Острое',
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: kombo,
    title: 'Пицца “Капричоза”',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '1561 ₽',
    summa: '1456 ₽ ',
    top: 'TOP',
    gramm: '200 грамм',
    kal: '130 Ккал',
  },
]
