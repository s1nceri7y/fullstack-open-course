import { useState } from "react";

const Button = ({ clickHandler, text }) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

function Statistics({ good, neutral, bad }) {
  if (good === neutral && neutral === bad && bad === 0) return (
    <p>No feedback given</p>
  )

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Average" value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text="Positive" value={(good) / (good + bad + neutral) * 100} />
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h3>Give feedback</h3>
      <Button clickHandler={() => setGood(good + 1)} text="Good" />
      <Button clickHandler={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button clickHandler={() => setBad(bad + 1)} text="Bad" />
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
