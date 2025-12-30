import './App.css'
import trainingPlan from './training-plan'
import Day from './day-component'

function App() {
  return (
    <>
      <header className="bg-blue-500 p-5 text-center">
        <h1 className="text-3xl text-white font-bold">Exercícios</h1>
      </header>
      <div className="select-none">
        {
          trainingPlan.map((day) => {
            if (day.exercises.length) {
              return <Day day={day.day} exercises={day.exercises} />
            }

            return null
          })
        }
      </div>
    </>
  )
}

export default App
