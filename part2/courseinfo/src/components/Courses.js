function Header({ name }) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
  function Content({ course }) {
    const parts = course.parts
    let i = 1;
    return (
      <div>
        {
          parts.map(part =>
            <Part key={i++} name={part.name} exercises={part.exercises} />
          )
        }
      </div>
    )
  }
  
  function Part({ name, exercises }) {
    return (
      <div>
        <p>
          {name} - {exercises}
        </p>
      </div>
    )
  }
  
  function Total({ parts }) {
    const sum = parts.reduce((sum, e) => sum + e.exercises, 0)
    console.log(`sum of parts: ${sum}`)
    return (
      <div>
        <b>Total of exercises {sum}</b>
      </div>
    )
  }
  
  function Course({ course }) {
    console.log(course)
    return (
      <div>
        <Header name={course.name} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  function Courses({ courses }) {
    return(
      <div>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </div>
    )
  }

  export default Courses;