const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
)

const Content = (props) => (
  <div>
    <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
  </div>
)

const Total = (props) => {
  console.log()
  let total = 0
  for (var i in props.parts) {
    const part = props.parts[i]
    total += part.exercises
  }
  return (

  <p>Number of exercises {total}</p>
)}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App