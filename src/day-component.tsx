import Exercise from "./exercise-component"

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
    function toggleHidden(e: React.MouseEvent<HTMLElement>) {
        const el = e.currentTarget.nextElementSibling as HTMLElement
        el.hidden = !el.hidden

    }

    return (
        <section>
          <h2 className="text-lg w-full p-4 font-semibold border-b-2 border-b-blue-200 bg-gray-600 cursor-pointer" onClick={(e) => toggleHidden(e)}>{day}</h2>
          <div className='px-4 py-6' hidden>
            <div>
                {
                    exercises.map((exercise) => {
                        console.log(exercise)
                        return <Exercise name={exercise.name} sets={exercise.sets} reps={exercise.reps} rest={exercise.rest} weight={exercise.weight} text={exercise.text} img={exercise.image} muscleImg={exercise.muscleImage} video={exercise.video}/>
                    })
                }
            </div>
          </div>
        </section>
    )
}

export default Day