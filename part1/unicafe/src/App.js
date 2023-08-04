import { useState } from 'react'

const Header = ({name}) =>{
  return (
    <h2>{name}</h2>
  )
}

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const StatisticLine = ({name, value}) =>{
    if (name === "positive"){
      return (
      <tr>
        <td>{name}</td>
        <td>{value}%</td>
      </tr>)
    }
   return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>)
}

const Statistics = ({good, neutral, bad}) =>{
  
  if(good || neutral || bad)
  {
    let all = good + bad + neutral
    let avg = (good*1 + bad*-1)/all
    let positive = (good)/all
    return (
      <div>
      <Header name = {"Statistics"}/>
      <table>
        <tbody>
          <StatisticLine name = "good" value = {good}/>
          <StatisticLine name = "neutral" value = {neutral}/> 
          <StatisticLine name = "bad" value = {bad}/> 
          <StatisticLine name = "all" value = {all}/> 
          <StatisticLine name = "avg" value = {avg}/>  
          <StatisticLine name = "positive" value = {positive}/> 
        </tbody>
      </table>
      </div>
    )
  }
  else{
    return (<p> No Feedback Given</p>)
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const goodCount = good + 1
    setGood(goodCount)
  }
  const handleClickNeutral = () => {
    const neutralCount = neutral + 1
    setNeutral(neutralCount)
  }
  const handleClickBad = () => {
    const badCount = bad + 1
    setBad(badCount)
  }

  return (
    <div>
      <Header name = {"Give Feedback"} />
      <Button name = {"Good"} handleClick = {handleClickGood}>Good</Button>
      <Button name = {"Neutral"} handleClick = {handleClickNeutral}>Neutral</Button>
      <Button name = {"Bad"} handleClick = {handleClickBad}>Bad</Button>
      <Statistics good = {good} bad = {bad} neutral={neutral}/>
    </div>
  )
}

export default App