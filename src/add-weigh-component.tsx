import { useRef } from "react"

type AddWeightModalProps = {
  modalInfo: {dayIndex: number, exerciseName: string, setIndex: number, hidden: boolean}
  onCloseModal: () => void
  onSetNewWeight: (dayIndex: number, exerciseName: string, setIndex: number, weight: string) => void
}

function AddWeightModal({ modalInfo, onCloseModal, onSetNewWeight }: AddWeightModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  if (modalInfo.hidden) return null

  function saveExerciseSetWeight() {
    let newWeight = inputRef.current?.value
    onSetNewWeight(modalInfo.dayIndex, modalInfo.exerciseName, modalInfo.setIndex, newWeight!)
    onCloseModal()
  }

  return (
    <>
      <div className="fixed z-2 rounded-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 flex flex-col items-center px-2 py-4">
        <p className="text-center pb-4 font-bold">Alterar carga</p>
        <label htmlFor="weight" className="absolute text-sm top-11 left-12 bg-gray-800 px-1">Carga</label>
        <input
        ref={inputRef}
        autoFocus
        placeholder="Ex: 10kg ou 5 placas"
        type="text"
        name="weight"
        id="weight"
        className="w-10/12 h-10 border mb-4 p-2"
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveExerciseSetWeight()
          }
        }}/>
        <div className="flex gap-5 px-5">
          <button type="button" className="cursor-pointer border-2 border-blue-500 hover:bg-blue-700 rounded-full p-2 w-24" onClick={onCloseModal}>Cancelar</button>
          <button type="button" className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-full p-2 w-24" onClick={saveExerciseSetWeight}>Salvar</button>
        </div>
      </div>
      <div className="w-dvw h-dvh fixed z-1 bg-black/90 top-0 left-0" onClick={onCloseModal}></div>
    </>
  )
}

export default AddWeightModal