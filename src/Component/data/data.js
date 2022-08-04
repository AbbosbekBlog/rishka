import React from 'react'
import Ostroe from '../Image/Ostroe.png'

import Hot from '../Image/Hot.png'
import Feladelfiya from '../Image/Feladelfiya.png'
import krvetka from '../Image/krvetka.png'
import kombo from '../Image/kombo.png'
import pizza from '../Image/pizza.png'
import komboSmall from '../Image/komboSmall.png'
import kvatro from '../Image/kvatro.png'
import riksha from '../Image/riksha.png'
import parma from '../Image/parma.png'
import stezario from '../Image/stezario.png'
import pipiriza from '../Image/pipiriza.png'
import kaprichaza from '../Image/kaprichaza.png'

import imageItem1 from '../Image/imageItem1.png'
import imageItem2 from '../Image/imageItem2.png'
import imageItem3 from '../Image/imageItem3.png'
import imageItem4 from '../Image/imageItem4.png'
import imageItem5 from '../Image/imageItem5.png'
import imageItem6 from '../Image/imageItem6.png'
// cushi
import lasos from '../Image/lasos.svg'
import tunes from '../Image/tunes.svg'
import ugor from '../Image/ugor.svg'
import krebetka from '../Image/krebetka.svg'
import krob from '../Image/krob.svg'
import midi from '../Image/midi.svg'
import vagon from '../Image/vagon.svg'
import top from '../Image/top.svg'
import newi from '../Image/new.svg'
import skitki from '../Image/skitki.svg'
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
export const sushiData = [
  { id: 1, img: lasos, name: 'Лосось' },
  { id: 2, img: tunes, name: 'Тунец' },
  { id: 3, img: ugor, name: 'Угорь' },
  { id: 4, img: krebetka, name: 'Креветка' },
  { id: 5, img: krob, name: 'Краб' },
  { id: 6, img: midi, name: 'Мидии' },
]
export const sushiDataBottom = [
  { id: 1, img: Ostroe, name: 'Острое' },
  { id: 2, img: Hot, name: 'Запеченный рол' },
  { id: 3, img: vagon, name: 'vagon' },
  { id: 4, img: top, name: 'top' },
  { id: 5, img: newi, name: 'new' },
  { id: 6, img: skitki, name: 'skitki' },
]
export const footCard = [
  { id: 1, img: imageItem1 },
  { id: 2, img: imageItem2 },
  { id: 3, img: imageItem3 },
  { id: 4, img: imageItem6 },
  { id: 5, img: imageItem5 },
  { id: 6, img: imageItem4 },
]
export const sushiCard = [
  {
    id: 1,
    image: vagon,
    imageText: 'Vegan',

    img: Feladelfiya,
    title: 'Ролл "Филадельфия"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '269 ₽',
    summa: '219 ₽ ',
    top: 'TOP',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 2,

    img: krvetka,
    title: 'Ролл "Сливочная креветка"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '224 ₽',
    summa: '219 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 3,
    image: Ostroe,
    imageText: 'Острое',
    img: Feladelfiya,
    title: 'Ролл "Чикен энд Чиз"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '232 ₽',
    summa: '199 ₽ ',
    new: 'NEW',
    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 4,

    img: Feladelfiya,
    title: 'Ролл "Филадельфия"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '269 ₽',
    summa: '219 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 5,
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: krvetka,
    title: 'Ролл "Сливочная креветка"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '224 ₽',
    summa: '219 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 6,

    image: Ostroe,
    imageText: 'Острое',
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: Feladelfiya,
    title: 'Ролл "Чикен энд Чиз"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '232 ₽',
    summa: '199 ₽ ',
    new: 'NEW',
    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 7,
    image2: Hot,
    image2Text: 'Горячий ролл',
    img: Feladelfiya,
    title: 'Ролл "Филадельфия"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '269 ₽',
    summa: '219 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 8,

    img: krvetka,
    title: 'Ролл "Сливочная креветка"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '224 ₽',
    summa: '219 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
  {
    id: 9,

    img: Feladelfiya,
    title: 'Ролл "Чикен энд Чиз"',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    summaCenter: '232 ₽',
    summa: '199 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
  },
]

export const pizzaData = [
  {
    id: 1,

    img: riksha,
    title: 'Пицца “Рикша”',
    text:
      'соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.',
    summaCenter: '590 ₽',
    summa: '510 ₽ ',
    top: 'TOP',
    gramm: '450 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },

  {
    id: 2,

    img: parma,
    title: 'Пицца “Парма”',
    text: 'соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.',
    summaCenter: '699 ₽',
    summa: '588 ₽ ',
    // top: 'TOP',
    gramm: '380 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 3,

    img: stezario,
    title: 'Пицца “Цезарио”',
    text:
      'соус бешамель, помидоры, хрустящий салат, пармезан, куриное мясо, сыр моцарелла, перепелиные яйца, соус "Цезарь".',
    summaCenter: '590 ₽',
    summa: '540 ₽ ',
    new: 'New',
    gramm: '580 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 4,

    img: pipiriza,
    title: 'Пицца “Пеперони”',
    text: 'сыр моцарелла, соус барбекю, пеперони, пармезан, рукола.',
    summaCenter: '545 ₽',
    summa: '499 ₽ ',
    // new: 'New',
    gramm: '390 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 5,

    img: kaprichaza,
    title: 'Пицца “Капричоза”',
    text: 'соус томатный, сыр моцарелла, ветчина, свежие грибы.',
    summaCenter: '550 ₽',
    summa: '450 ₽ ',
    // new: 'New',
    gramm: '450 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 6,

    img: kvatro,
    title: 'Пицца “Кватро формаджи”',
    text: 'Лосось, сыр "Филадельфия", огурец, авокадо.',
    summaCenter: '600 ₽',
    summa: '550 ₽ ',
    // new: 'New',
    gramm: '390 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    // line: 'Пицца Баварская; Сет Фирменный;',
  },
]
export const foot = [
  {
    id: 1,
    img: <Pizza className="product_item_image" />,
    to: '/sushi',
    text: 'Пицца',
  },
  {
    id: 2,
    img: <Sushi className="product_item_image" />,
    to: '/sushi',
    text: 'Суши',
  },
  {
    id: 3,
    img: <Polli className="product_item_image" />,
    to: '/sushi',
    text: 'Роллы',
  },
  {
    id: 4,
    img: <Ceti className="product_item_image" />,
    to: '/sushi',
    text: 'Сеты',
  },
  {
    id: 5,
    img: <Wok className="product_item_image" />,
    to: '/sushi',
    text: 'Wok',
  },
  {
    id: 6,
    img: <Soup className="product_item_image" />,
    to: '/sushi',
    text: 'Супы',
  },
  {
    id: 7,
    img: <Calat className="product_item_image" />,
    to: '/sushi',
    text: 'Салаты',
  },
  {
    id: 8,
    img: <Detsert className="product_item_image" />,
    to: '/sushi',
    text: 'Десерты',
  },
  {
    id: 9,
    img: <Tea className="product_item_image" />,
    to: '/sushi',
    text: 'Напитки',
  },
  {
    id: 10,
    img: <Gif className="product_item_image" />,
    to: '/sushi',
    text: 'Акции',
  },
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

export const slayder2 = [
  {
    id: 1,

    img: kombo,
    title: 'Комбо микс',

    summaCenter: '1 499 ₽',
    summa: '1 319 ₽ ',
    new: 'NEW',
    gramm: '200 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    line: 'Пицца Баварская; Сет Фирменный;',
  },
  {
    id: 2,

    img: pizza,
    title: 'Дабл пицца',

    summaCenter: '999 ₽',
    summa: '899 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    line: 'Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)',
  },
  {
    id: 3,

    img: komboSmall,
    title: 'Комбо Small party',

    summaCenter: '2 111 ₽',
    summa: '1 799 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    line: 'Пицца Неаполитано; Пицца Царская; Сет Суши шок;',
  },
  {
    id: 4,

    img: kvatro,
    title: 'Пицца “Кватро формаджи”',

    summaCenter: '600 ₽',
    summa: '525 ₽ ',

    gramm: '200 грамм',
    kal: '130 Ккал',
    sm: '30 см',
    sm2: '50 см',
    yevro: '+150 ₽  ',
    cracle: true,
    line: 'Лосось, сыр "Филадельфия", огурец, авокадо',
  },
]
export const categoryDataItems = [
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
]
