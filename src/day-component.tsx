import Exercise from "./exercise-component"

function Day({day, exercises}) {
    function toggleHidden(e: React.MouseEvent<HTMLElement>) {
        e.currentTarget.nextElementSibling!.hidden = !e.currentTarget.nextElementSibling!.hidden
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