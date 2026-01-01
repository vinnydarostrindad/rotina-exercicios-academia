import type { ExerciseKeys } from "./App"
import playBtnImg from "./assets/play-button-arrowhead.png"
import { useState, useRef } from "react"

type ExerciseProps = {
    dayIndex: number,
    exercise: ExerciseKeys,
    onToggleSets: (dayIndex: number, exerciseName: string, setIndex: number) => void
    onClickHold: (dayIndex: number, exerciseName: string, setIndex: number) => void
}

function Exercise({dayIndex, exercise, onToggleSets, onClickHold}: ExerciseProps) {
    const holdTimeout = useRef<number | null>(null)
    const exerciseDone = exercise.sets.every(done => done)
    const [showExerciseInfos, setShowExerciseInfos] = useState<boolean>(false)

    function playOrPauseVideo(e: React.MouseEvent<HTMLVideoElement>) {
        var video: HTMLVideoElement = e.currentTarget
        var playBtn = video.previousElementSibling as HTMLButtonElement
        if (video.paused) {
            video.play()
            playBtn.hidden = true
        } else {
            video.pause()
            playBtn.hidden = false
            video.currentTime = 0
        }
    }

    function handlePressStart(dayIndex: number, exerciseName: string, setIndex: number) {
        holdTimeout.current = setTimeout(() => {
            onClickHold(dayIndex, exerciseName, setIndex)
    }, 500)
    }

    function handlePressEnd() {
        if (holdTimeout.current) {
            clearTimeout(holdTimeout.current)
        }
    }

    return (
        <>
            <div className={`exercise mb-8 flex items-center border rounded-2xl overflow-hidden cursor-pointer ${exerciseDone ? "exercise-done" : ""}`} onClick={() => setShowExerciseInfos(prev => !prev)}>
                <img src={exercise.image} className="size-28 object-cover"/>
                <h3 className="text-base w-full text-center font-semibold px-2">{exercise.name}</h3>
            </div>
            {
                showExerciseInfos ?
                    <div className='px-4 mb-8'>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-4 justify-center">
                                {
                                    exercise.sets.map((done, index) => {
                                        return (
                                            <div 
                                            key={index}
                                            className={`flex flex-col justify-center w-3/7 text-center border border-wight rounded-lg p-2 cursor-pointer ${done ? "set-done" : ""}`}
                                            onClick={() => onToggleSets(dayIndex, exercise.id, index)}
                                            onMouseDown={() => handlePressStart(dayIndex, exercise.id, index)}
                                            onMouseUp={handlePressEnd}
                                            onTouchStart={() => handlePressStart(dayIndex, exercise.id, index)}
                                            onTouchEnd={handlePressEnd}>
                                                <p className="font-bold">{index + 1}° Série</p>
                                                {
                                                    exercise.weight[index] ? <p className="text-xs mt-1"><span className="font-semibold">Peso</span>: {exercise.weight[index]}</p> : null
                                                }
                                                <p className="text-xs mt-1"><span className="font-semibold">Repetições:</span> {exercise.reps}</p>
                                                <p className="text-xs mt-1"><span className="font-semibold">Intervalo:</span> {exercise.rest}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className="text-center font-semibold">{exercise.text}</p>
                            <img src={exercise.muscleImage} width="370" className="m-auto border-3 border-blue-100"/>
                            {
                                exercise.video ?
                                    <div className="flex justify-center items-center">
                                        <button className="size-12 absolute bg-blue-700 rounded-full flex justify-center items-center"><img src={playBtnImg} style={{marginLeft: "3px"}}/></button>
                                        <video src={exercise.video} onClick={(e) => playOrPauseVideo(e)}></video>
                                    </div>
                                    :  null
                            }
                            
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Exercise