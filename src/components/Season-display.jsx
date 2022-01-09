import './Season-display.css'
import React from 'react'
const seasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
  Winter: {
    text: 'Burrits cold',
    iconName: 'snowflake',
  },
}

console.log(seasonConfig)
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  // yaha p season ka output h winter kse = props.lat is >0 and today month is jan less then 2
  let season = getSeason(props.lat, new Date().getMonth())
  //to ab seasonConfig m season is "Winter" then yaha Winter ka text aur iconName aajayega
  // yha p object ki key exesses karne k liye season waha apply hua h and key string hotii h always isi liye "String m vo likte h"
  // yaha season ka output ya to "Winter" string h ya to"Summer" string h
  const { text, iconName } = seasonConfig[season]
  console.log(season)

  //   console.log(text)
  //   console.log(iconName)

  //   const text = season === 'Winter' ? 'Burr its chilly' : 'Time to hit the beach'
  //   const icon = season === 'Winter' ? 'snowflake' : 'sun'

  //   console.log(season)
  return (
    <div className={`Season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left `} />
      <h1 style={{ textAlign: 'center' }}>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  )
}
export default SeasonDisplay
