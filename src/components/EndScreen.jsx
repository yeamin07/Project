import "../App.css"
import { useContext } from "react"
import { GameStateContext } from "../helpers/Contexts"
import { Questions } from "../helpers/Questions"

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(GameStateContext)

  const restartQuiz = () => {
    setGameState("menu")
    setScore(0)
  }

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen