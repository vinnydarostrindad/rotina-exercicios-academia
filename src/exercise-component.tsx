import type { ExerciseKeys } from "./App"
import playBtnImg from "./assets/play-button-arrowhead.png"
import { useEffect, useRef, useState } from "react"

type ExerciseProps = {
    dayIndex: number,
    exercise: ExerciseKeys,
    onToggleSets: (dayIndex: number, exerciseName: string, setIndex: number) => void
    onClickHold: (dayIndex: number, exerciseName: string, setIndex: number) => void
}

function Exercise({dayIndex, exercise, onToggleSets, onClickHold}: ExerciseProps) {
    const holdTimeout = useRef<number | null>(null)
    const pressStartPosition = useRef<{ x: number, y: number } | null>(null)
    const longPressTriggered = useRef(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const exerciseDone = exercise.sets.every(done => done)
    const [showExerciseInfos, setShowExerciseInfos] = useState<boolean>(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    function clearHoldTimeout() {
        if (holdTimeout.current !== null) {
            clearTimeout(holdTimeout.current)
            holdTimeout.current = null
        }
    }

    function playOrPauseVideo() {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
        } else {
            video.pause()
            video.currentTime = 0
        }
    }

    function handlePressStart(e: React.PointerEvent<HTMLDivElement>, exerciseName: string, setIndex: number) {
        clearHoldTimeout()
        pressStartPosition.current = { x: e.clientX, y: e.clientY }
        longPressTriggered.current = false
        holdTimeout.current = setTimeout(() => {
            onClickHold(dayIndex, exerciseName, setIndex)
            holdTimeout.current = null
            longPressTriggered.current = true
        }, 500)
    }

    function handlePressMove(e: React.PointerEvent<HTMLDivElement>) {
        const startPosition = pressStartPosition.current
        if (!startPosition) return

        const movementThreshold = 10
        if (Math.abs(e.clientX - startPosition.x) > movementThreshold || Math.abs(e.clientY - startPosition.y) > movementThreshold) {
            clearHoldTimeout()
            pressStartPosition.current = null
        }
    }

    function handlePressEnd() {
        clearHoldTimeout()
        pressStartPosition.current = null
    }

    function handleSetClick(setIndex: number) {
        if (longPressTriggered.current) {
            longPressTriggered.current = false
            return
        }

        onToggleSets(dayIndex, exercise.id, setIndex)
    }

    useEffect(() => {
        function cancelHoldOnScroll() {
            clearHoldTimeout()
            pressStartPosition.current = null
        }

        window.addEventListener("scroll", cancelHoldOnScroll, true)
        return () => {
            window.removeEventListener("scroll", cancelHoldOnScroll, true)
            cancelHoldOnScroll()
        }
    }, [])

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
                                            onClick={() => handleSetClick(index)}
                                            onPointerDown={(e) => handlePressStart(e, exercise.id, index)}
                                            onPointerMove={handlePressMove}
                                            onPointerUp={handlePressEnd}
                                            onPointerCancel={handlePressEnd}
                                            onPointerLeave={handlePressEnd}>
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
                                        {
                                            !isVideoPlaying ?
                                            <button
                                                type="button"
                                                className="size-12 absolute bg-blue-700 rounded-full flex justify-center items-center"
                                                aria-label={isVideoPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                                                onClick={playOrPauseVideo}>
                                                <img src={playBtnImg} style={{marginLeft: "3px"}} alt=""/>
                                            </button>
                                            : ""
                                        }
                                        <video
                                            ref={videoRef}
                                            src={exercise.video}
                                            onClick={playOrPauseVideo}
                                            onPlay={() => setIsVideoPlaying(true)}
                                            onPause={() => setIsVideoPlaying(false)}
                                            onEnded={() => setIsVideoPlaying(false)}></video>
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
