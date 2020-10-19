import React, {useState} from 'react';
import MainCard from "../MainCard";
import SeriesOfChoices from "../SeriesOfChoices";

import "./styles.scss"


const Themes = [1, 2, 3, 4]
const mockData1 = [
  {body: 'alaCarslalala1', election: ["da", "no1", "very no5", "NNNOOOOOooooooO!7"]},
  {body: 'alalaCarslala2', election: ["da1", "no2", "very no6", "NNNOOOOOooooooO!7"]},
  {body: 'alCarsalalala3', election: ["da3", "no3", "very no7", "NNNOOOOOooooooO!8"]},
  {body: 'alalalCarsala4', election: ["da4", "no4", "very no8", "NNNOOOOOooooooO!7"]},
]
const mockData2 = [
  {body: 'alalCars123alala1', election: ["da", "no1", "very no5", "NNNOOOOOooooooO!7"]},
  {body: 'alalalala2', election: ["da1", "no2", "very no6", "NNNOOOOOooooooO!7"]},
  {body: 'alalalCars123ala3', election: ["da3", "no3", "very no7", "NNNOOOOOooooooO!8"]},
  {body: 'aCars123lalalala4', election: ["da4", "no4", "very no8", "NNNOOOOOooooooO!7"]},
]
const mockData3 = [
  {body: 'alBodyala1', election: ["da", "no1", "very no5", "NNNOOOOOooooooO!7"]},
  {body: 'aBodyalala2', election: ["da1", "no2", "very no6", "NNNOOOOOooooooO!7"]},
  {body: 'aBodyla3', election: ["da3", "no3", "very no7", "NNNOOOOOooooooO!8"]},
  {body: 'alalBodyala4', election: ["da4", "no4", "very no8", "NNNOOOOOooooooO!7"]},
]
const mockData4 = [
  {body: 'aFlowera1', election: ["da", "no1", "very no5", "NNNOOOOOooooooO!7"]},
  {body: 'alFlowera2', election: ["da1", "no2", "very no6", "NNNOOOOOooooooO!7"]},
  {body: 'alFlower3', election: ["da3", "no3", "very no7", "NNNOOOOOooooooO!8"]},
  {body: 'alFlower4', election: ["da4", "no4", "very no8", "NNNOOOOOooooooO!7"]},
]

const mainMockData = [{theme: "Cars", data: mockData1}, {theme: "Cars123", data: mockData2}, {
  theme: "Body",
  data: mockData3
}, {theme: "Flower", data: mockData4}]


const FirstSelect = () => {
  const [selectedTheme, setTheme] = useState(0)

  return (
    <div className="site-card-border-less-wrapper">
      <div className="main-card-wrapper">
        {Themes.map((i) =>
          <MainCard theme={mainMockData[i - 1].theme} key={i} schemaIndex={i} selected={selectedTheme}
                    select={() => setTheme(i)}/>
          )
        }
      </div>
      {!!selectedTheme && <SeriesOfChoices data={mainMockData[selectedTheme - 1].data} reSelect={() => {
        setTheme(0)
      }}/>}
    </div>
  )
}

export default FirstSelect
