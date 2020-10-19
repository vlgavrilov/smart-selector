import React, {useState} from 'react';
import {Button} from 'antd';

import CardWithChoice from "../CardWithChoice"
import "./styles.scss"


const SeriesOfChoices = ({reSelect, data}) => {
  const [currentStep, setStep] = useState(0)
  const [choices, setChoices] = useState([])
  const [isComplete, setComplete] = useState(false)


  const select = (choice) => {
    if (currentStep < data.length) {
      setStep(lastStep => lastStep + 1)
      setChoices([...choices, choice])
    }
    if ((currentStep + 1) === data.length) {
      setComplete(true)
    }
  }
  const stepBack = () => {
    if (currentStep >= 1) {
      setComplete(false)
      setChoices(lastChoices => lastChoices.slice(0, -1))
      setStep(lastStep => lastStep - 1)
    } else {
      reSelect()
    }
  }
  const Selector = data.map((item, index) => {
    if (index <= choices.length) return <CardWithChoice key={index} choice={choices[index]} currentStep={currentStep}
                                                        data={item} step={index} select={(choice) => select(choice)}/>
    return false
  })

  return (
    <>
      <div className="seriesOfChoices">
        {Selector}
      </div>
      <Button onClick={stepBack} type="primary">Back</Button>
      {isComplete && <img src={"https://cdn.igromania.ru/mnt/news/5/b/a/d/e/d/86320/f50ee43e651d907d_1920xH.jpg"} alt=""/>}
    </>
  )
}

export default SeriesOfChoices
