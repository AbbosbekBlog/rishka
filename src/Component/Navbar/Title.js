import React from 'react'
import './title.css'

function Title({ alt, title, img }) {
  return (
    <div className="title__box_item">
      <h2>{title}</h2>
      <img src={img} alt={alt} />
    </div>
  )
}

export default Title
