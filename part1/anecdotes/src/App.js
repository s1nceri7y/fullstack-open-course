import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({handler, text}) => <button onClick={handler}> {text} </button>
const Anecdote = ({text, score}) => {
  return(
    <div>
      <p>{text}</p>
      <p>This anecdote has {score} score</p>
    </div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // const [score, setScore] = useState(Object.assign({}, anecdotes.map(() => 0)))
  // const [score, setScore] = useState({...anecdotes.map(() => 0)})
  const [score, setScore] = useState(new Uint8Array(anecdotes.length))

  console.log(score)
  const bestAnecdoteIndex = score.indexOf(Math.max(...score))

  return (
    <div>
      <Button handler={() => setSelected(getRandomInt(anecdotes.length - 1)) } text="get next" />
      <p></p>
      <Anecdote text={anecdotes[selected]} score={score[selected]} />
      <Button handler={() => { const newScore = [...score]; newScore[selected] += 1; setScore(newScore)  }} text="vote"/> 
      <h3>Best anecdote</h3>
      <Anecdote text={anecdotes[bestAnecdoteIndex]} score={score[bestAnecdoteIndex]} />
      
    </div>
  )
}

export default App;
