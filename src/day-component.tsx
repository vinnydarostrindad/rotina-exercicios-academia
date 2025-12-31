import Exercise from "./exercise-component"
import { useState } from "react"

type Exercises =  {
    id: string,
    name: string,
    sets: boolean[],
    reps: string,
    rest: string,
    weight: number,
    text: string,
    image: string,
    muscleImage: string,
    video: string,
}

type DayProps = {
	dayIndex: number
    day: string,
    exercises: Exercises[]
	onToggleSets: (dayIndex: number, exerciseName: string, setIndex: number) => void
}


function Day({dayIndex, day, exercises, onToggleSets}: DayProps) {
    const [showExercises, setShowExercises] = useState(false)

    return (
        <section>
          <h2 className="text-lg w-full p-4 font-semibold border-b-2 border-b-blue-200 bg-gray-600 cursor-pointer" onClick={() => setShowExercises(!showExercises)}>{day}</h2>
                {
                showExercises ?
                    <div className='px-4 py-6'>
                        <div>
                            {
                                exercises.map((exercise) => (
                                    <Exercise
										key={exercise.id}
										dayIndex={dayIndex}
                                        exercise={exercise}
										onToggleSets={onToggleSets}
                                    />
                                ))
                            }
                        </div>
                    </div>
                : null
                }
        </section>
    )
}

export default Day