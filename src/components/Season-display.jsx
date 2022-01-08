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

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  // yaha p season ka output h winter kse props.lat is >0 and today month is jan less then 2
  let season = getSeason(props.lat, new Date().getMonth())
  //to ab seasonConfig m season is"Winter" then yaha Winter ka text aur iconName aajayega
  const { text, iconName } = seasonConfig['Winter']
  console.log(season)

  //   console.log(text)
  //   console.log(iconName)

  //   const text = season === 'Winter' ? 'Burr its chilly' : 'Time to hit the beach'
  //   const icon = season === 'Winter' ? 'snowflake' : 'sun'

  //   console.log(season)
  return (
    <div>
      <i className={`${iconName} icon `} />
      <h1 style={{ textAlign: 'center' }}>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
}
export default SeasonDisplay
