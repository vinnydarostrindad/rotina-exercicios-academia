import './App.css'
import trainingPlan from './training-plan'
import Day from './day-component'
import { useEffect, useState } from 'react'

const GYM_PROGRESS = "progress"

export type ExerciseKey =
  | "inclineDumbbellPress"
  | "pecDeck"
  | "highCableCrossover"
  | "dumbbellBenchPress"
  | "ropeTricepsPushdown"
  | "skullCrusher"
  | "frenchPress"
  | "seatedCalfRaise"
  | "squat"
  | "legExtension"
  | "hipAbductor"
  | "legPress"
  | "latPulldown"
  | "closeGripLowRow"
  | "wideGripLowRow"
  | "bentOverRow"
  | "barbellCurl"
  | "scottCurl"
  | "shoulderPress"
  | "lateralRaise"
  | "frontRaise"
  | "reverseFly"
  | "hammerCurl"
  | "absCrunch"
  | "plank"
  | "donkeyCalfRaise"
  | "legCurl"
  | "sumoDeadlift"
  | "stiffLegDeadlift"

type Exercise = {
  id: ExerciseKey
  name: string
  sets: boolean[]
  reps: string
  rest: string
  weight: number
  text: string
  image: string
  muscleImage: string
  video: string
}

type Day = {
  id: string
  day: string
  exercises: Exercise[]
}


function App() {
  function loadInitialData() {
    const saved = localStorage.getItem(GYM_PROGRESS)
    return saved ? JSON.parse(saved) : trainingPlan
  }

  const [exercisesData, setExercisesData] = useState<Day[]>(loadInitialData)

  useEffect(() => {
    localStorage.setItem(GYM_PROGRESS, JSON.stringify(exercisesData))
  }, [exercisesData])

  function toggleSets(dayIndex: number, exerciseName: string, setIndex: number) {
    setExercisesData(prev => {
      const copy = structuredClone(prev)
      let sets = copy[dayIndex].exercises.find(e => e.id === exerciseName)!.sets
  
      sets[setIndex] = !sets[setIndex]

      return copy
    })
  }

  function resetSetsDone() {
    setExercisesData(prev => {
      const copy = structuredClone(prev)

      copy.forEach(day => {
        day.exercises.forEach(exercise => {
          exercise.sets = exercise.sets.map(() => false)
        })
      })

      return copy
    })
  }

  return (
    <>
      <header className="bg-blue-500 p-5 text-center">
        <h1 className="text-3xl text-white font-bold">Exercícios</h1>
      </header>
      <div className="select-none">
        {
          exercisesData.map((day, dayIndex: number) => {
            if (day.exercises.length) {
              return <Day key={day.id} dayIndex={dayIndex} day={day.day} exercises={day.exercises} onToggleSets={toggleSets}/>
            }

            return null
          })
        }

        <div className="flex justify-center pt-4 pb-12"><button type="button" className="cursor-pointer bg-blue-700 hover:bg-blue-950 active:bg-blue-800 p-8 rounded-2xl border-2" onClick={() => resetSetsDone()}>Semana concluída!</button></div>
      </div>
    </>
  )
}

export default App
