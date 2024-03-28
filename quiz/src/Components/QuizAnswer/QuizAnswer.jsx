import './QuizAnswer.css'

const QuizAnswers = (props) => {    
    const {title, index, click, isCorrect, isAnswered, userAnswer, id} = props
    
    const getClassName = () => {
        if (isAnswered) {
            if (isCorrect) {
                return "correct"
            } else {
                return "incorrect"
            }
        }
        return
    }

    return (
        <div className={`answer-item ${getClassName()}`}
         onClick={click}>
            {index + 1}. 
            <span>
                {title}
                {id === userAnswer ? "- YOUR ANSWER" : ""}
            </span>
        </div>
    )
}

export default QuizAnswers;