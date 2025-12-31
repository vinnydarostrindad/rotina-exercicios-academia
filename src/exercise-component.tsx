import playBtnImg from "./assets/play-button-arrowhead.png"
import { useState } from "react"

type infosOfExercise = {
    name: string,
    sets: number,
    reps: string,
    rest: string,
    weight: number,
    text: string,
    img: string,
    muscleImg: string,
    video: string,
}

function Exercise({name, sets, reps, rest, weight, text, img, muscleImg, video}: infosOfExercise) {
    const [setsDone, setSetsDone] = useState<boolean[]>(
        Array(sets).fill(false)
    )
    const exerciseDone = setsDone.every(done => done)
    const [showExerciseInfos, setShowExerciseInfos] = useState<boolean>(false)

    var setsArray = Array(sets)
    for (var i = 0; i < setsArray.length; i++) {
        setsArray[i] = i
    }

    function renderExerciseInfos() {
       setShowExerciseInfos(prev => !prev)
    }

    function toggleSetAsDone(index: number) {
        setSetsDone(prev => {
            const copy = [...prev]
            copy[index] = !copy[index]

            return copy
        })
    }

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

    return (
        <>
            <div className={ exerciseDone ? "exercise mb-8 flex items-center border rounded-2xl overflow-hidden cursor-pointer exercise-done" : "exercise mb-8 flex items-center border rounded-2xl overflow-hidden cursor-pointer"} onClick={() => renderExerciseInfos()}>
                <img src={img} className="size-28 object-cover"/>
                <h3 className="text-base w-full text-center font-semibold px-2">{name}</h3>
            </div>
            {
                showExerciseInfos ?
                    <div className='px-4 mb-8'>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-4 justify-center">
                                {
                                    setsDone.map((done, index) => {
                                        return (
                                            <div className={done ? "w-3/7 text-center border border-wight rounded-lg p-2 cursor-pointer set-done" : "w-3/7 text-center border border-wight rounded-lg p-2 cursor-pointer"} onClick={() => toggleSetAsDone(index)}>
                                                <p className="font-bold">{index + 1}° Série</p>
                                                {
                                                    weight ? <p className="text-xs mt-1">Peso: {weight}kg</p> : null
                                                }
                                                <p className="text-xs mt-1">Repetições: {reps}</p>
                                                <p className="text-xs mt-1">Intervalo: {rest}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className="text-center font-semibold">{text}</p>
                            <img src={muscleImg} width="370" className="m-auto border-3 border-blue-100"/>
                            {
                                video ?
                                    <div className="flex justify-center items-center">
                                        <button className="size-12 absolute bg-blue-700 rounded-full flex justify-center items-center"><img src={playBtnImg} style={{marginLeft: "3px"}}/></button>
                                        <video src={video} onClick={(e) => playOrPauseVideo(e)}></video>
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