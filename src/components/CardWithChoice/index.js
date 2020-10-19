import React from 'react';
import {Card} from 'antd';

import "./styles.scss"


const MainCard = ({select, currentStep, step, data, choice}) => {
  const mainCardClassName = currentStep === step ? "selector-card--active" : "selector-card--disable"

  const subCardClassName = (index) => {
    if (choice + 1) {
      return choice === index ? "selector-card__item--active" : "selector-card__item--disable"
    }
    return "selector-card__item--no-select"
  }

  const handlerSelect = (item) => {
    if (currentStep === step) return select(item)
  }

  return (
    <Card title={data.body} className={`selector-card ${mainCardClassName}`}>
      {data.election.map((item, index) =>
        <Card onClick={() => handlerSelect(index)} className={`selector-card__item ${subCardClassName(index)}`}> {item}</Card>
      )}
    </Card>
  )
}


export default MainCard
