import React from "react";

function Header({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

function Content({ course }) {
  const parts = course.parts;
  let i = 0;
  return (
    <div>
      {
        parts.map(part =>
          <Part key={i++} name={part.name} exercise={part.exercise} />
        )
      }
    </div>
  )
}

function Part({ name, exercise }) {
  return (
    <div>
      <p>
        {name} {exercise}
      </p>
    </div>
  )
}

function Total({ parts }) {
  const sum = parts.reduce((sum, e) => sum + e.exercise, 0);
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 1
    }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App;
