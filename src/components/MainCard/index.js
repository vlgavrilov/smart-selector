import React from 'react';
import {Card} from 'antd';
import "./styles.scss"

const MainCard = ({schemaIndex, selected, select, theme}) => {
  const handlerSelect = selected === 0 ? select : () => {
  }
  const className = selected === 0 ?
    "MainCard__no-select" :
    selected === schemaIndex ?
      "MainCard__active-card"
      : "MainCard__disable-card"
  return (
    <Card title={theme} onClick={handlerSelect} className={`MainCard ${className}`}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}


export default MainCard
