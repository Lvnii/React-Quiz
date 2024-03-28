const QuizAnswers = (props) => {    
    const {title, isCorrect, click} = props

    return (
        <div onClick={click}>{title}</div>
    )
}

export default QuizAnswers;