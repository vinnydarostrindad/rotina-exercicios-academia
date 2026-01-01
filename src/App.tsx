import './App.css'
import trainingPlan from './training-plan'
import Day from './day-component'
import { useEffect, useState } from 'react'
import AddWeightModal from './add-weigh-component'

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

export type ExerciseKeys = {
  id: ExerciseKey
  name: string
  sets: boolean[]
  reps: string
  rest: string
  weight: string[]
  text: string
  image: string
  muscleImage: string
  video: string
}

type Day = {
  id: string
  day: string
  exercises: ExerciseKeys[]
}

type ModalInfo = {dayIndex: number, exerciseName: string, setIndex: number, hidden: boolean}


function App() {
  function loadInitialData() {
    const saved = localStorage.getItem(GYM_PROGRESS)
    return saved ? JSON.parse(saved) : trainingPlan
  }

  const [exercisesData, setExercisesData] = useState<Day[]>(loadInitialData)
  const [modalInfo, setModalInfo] = useState<ModalInfo>({dayIndex: 0, exerciseName: "", setIndex: 0, hidden: true})

  useEffect(() => {
    localStorage.setItem(GYM_PROGRESS, JSON.stringify(exercisesData))
  }, [exercisesData])

  useEffect(() => {
    const isModalHidden = modalInfo.hidden

    document.body.classList.toggle("not-scroll", !isModalHidden)
  }, [modalInfo])

  function toggleSets(dayIndex: number, exerciseName: string, setIndex: number) {
    setExercisesData(prev => {
      const copy = structuredClone(prev)
      let sets = copy[dayIndex].exercises.find(e => e.id === exerciseName)!.sets
  
      sets[setIndex] = !sets[setIndex]

      return copy
    })
  }

  function setNewWeight(dayIndex: number, exerciseName: string, setIndex: number, weight: string) {
    setExercisesData(prev => {
      const copy = structuredClone(prev)
      copy[dayIndex].exercises.find(e => e.id === exerciseName)!.weight[setIndex] = weight

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

  function closeModal() {
    setModalInfo({dayIndex: 0, exerciseName: "", setIndex: 0, hidden: true})
  }
  
  function openModal(dayIndex: number, exerciseName: string, setIndex: number) {
    setModalInfo({dayIndex, exerciseName, setIndex, hidden: false})
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
              return <Day
                key={day.id}
                dayIndex={dayIndex}
                day={day.day}
                exercises={day.exercises}
                onToggleSets={toggleSets}
                onClickHold={openModal}
              />
            }

            return null
          })
        }

        <div className="flex justify-center pt-4 pb-12"><button type="button" className="cursor-pointer bg-blue-700 hover:bg-blue-950 active:bg-blue-800 p-8 rounded-2xl border-2" onClick={() => resetSetsDone()}>Concluir semana</button></div>
      </div>
      <AddWeightModal modalInfo={modalInfo} onCloseModal={closeModal} onSetNewWeight={setNewWeight}/>
    </>
  )
}

export default App
