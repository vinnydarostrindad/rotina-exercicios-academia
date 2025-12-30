import playBtnImg from "./assets/play-button-arrowhead.png"

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
    var setsArray = Array(sets)
    for (var i = 0; i < setsArray.length; i++) {
        setsArray[i] = i
    }

    function toggleHidden(e: React.MouseEvent<HTMLElement>) {
        const el = e.currentTarget.nextElementSibling! as HTMLElement
       el.hidden = !el.hidden
    }

    function toggleSetAsDone(e: React.MouseEvent<HTMLElement>) {
        e.currentTarget.classList.toggle("set-done")

        verifyIfAllIsDone(e.currentTarget.parentElement)
    }

    function verifyIfAllIsDone(exercise: HTMLElement | null) {
        var quantityOfSets = exercise?.children.length
        var quantityOfDoneSets: number = 0
        for (var child of exercise?.children!) {
            if (child.className.includes("set-done")) {
                quantityOfDoneSets += 1
            }
        }

        if (quantityOfSets === quantityOfDoneSets) {
            exercise?.parentElement?.parentElement?.previousElementSibling!.classList.add("exercise-done")
        } else {
            exercise?.parentElement?.parentElement?.previousElementSibling!.classList.remove("exercise-done")
        }
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
            <div className="exercise mb-8 flex items-center border rounded-2xl overflow-hidden cursor-pointer" onClick={(e) => toggleHidden(e)}>
                <img src={img} className="size-28 object-cover"/>
                <h3 className="text-base w-full text-center font-semibold px-2">{name}</h3>
            </div>
            <div className='px-4 mb-8' hidden>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {
                            setsArray.map((_, index) => {
                                return (
                                    <div className="w-3/7 text-center border border-wight rounded-lg p-2 cursor-pointer" onClick={(e) => toggleSetAsDone(e)}>
                                        <p className="font-bold">{index + 1}° Série</p>
                                        {
                                            weight ? <p>{weight}kg</p> : null
                                        }
                                        <p>Repetições: {reps}</p>
                                        <p>Intervalo: {rest}</p>
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
        </>
    )
}

export default Exercise