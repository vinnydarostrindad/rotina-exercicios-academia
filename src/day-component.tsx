import Exercise from "./exercise-component"
import { useState } from "react"

type Exercises =  {
    id: string,
    name: string,
    sets: number,
    reps: string,
    rest: string,
    weight: number,
    text: string,
    image: string,
    muscleImage: string,
    video: string,
}

type DayProps = {
    day: string,
    exercises: Exercises[]
}


function Day({day, exercises}: DayProps) {
    const [showExercises, setShowExercises] = useState(false)

    function renderExercises() {
        setShowExercises(!showExercises)
    }

    return (
        <section>
          <h2 className="text-lg w-full p-4 font-semibold border-b-2 border-b-blue-200 bg-gray-600 cursor-pointer" onClick={() => renderExercises()}>{day}</h2>
                {
                showExercises ?
                    <div className='px-4 py-6'>
                        <div>
                            {
                                exercises.map((exercise) => (
                                    <Exercise
                                        name={exercise.name}
                                        sets={exercise.sets}
                                        reps={exercise.reps}
                                        rest={exercise.rest}
                                        weight={exercise.weight}
                                        text={exercise.text}
                                        img={exercise.image}
                                        muscleImg={exercise.muscleImage}
                                        video={exercise.video}
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