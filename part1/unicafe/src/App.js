import { useState } from 'react'

const addOne = (v, setFunc) => {
  return () => setFunc(v+1)
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good || bad || neutral) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + bad + neutral} />
            <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)} />
            <StatisticLine text="positive" value={good * 100 / (good + bad + neutral) + '%'} />
          </tbody>
        </table>
      </div>
    )
  } return (
    <div>No feedback given</div>
  )
}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td> 
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button handleClick={addOne(good, setGood)} text="good"/>
        <Button handleClick={addOne(neutral, setNeutral)} text="neutral"/>
        <Button handleClick={addOne(bad, setBad)} text="bad"/>
      </div>
      <div>
        <h1>statistics</h1>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App