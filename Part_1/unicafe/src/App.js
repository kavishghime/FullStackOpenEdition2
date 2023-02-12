import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.stats}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <StatisticLine text='good' stats={props.good} />
        <StatisticLine text='neutral' stats={props.neutral} />
        <StatisticLine text='bad' stats={props.bad} />
        <StatisticLine text='all' stats={props.all} />
        <StatisticLine text='average' stats={props.average} />
        <StatisticLine text='positive' stats={props.positive} />
      </table>
    </div>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodFeedback = () => {
    setGood(good + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header header='give feedback' />
      <Button onClick={goodFeedback} text='good' />
      <Button onClick={neutralFeedback} text='neutral' />
      <Button onClick={badFeedback} text='bad' />
      <Header header='statistics' />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        positive={(good * 100) / (good + neutral + bad)}
      />
    </div>
  )
}

export default App;
