import QuizAnswers from "../QuizAnswer/QuizAnswer";

const QuizItem = (props) => {
    const { id, answeredCorrectly, questionText, answers, difficulty, category, handleQuizAnswer } = props;

    return (
        <div className="quiz-question-container">
            <div className="question-header">
                <h3 className="question-text">{questionText}</h3>
                {/* <span className="question-difficulty">{difficulty}-</span>
                <span className="question-category">{category}</span> */}
                {answeredCorrectly === true && <h4>Correct</h4>}
                {answeredCorrectly === false && <h4>Inorrect</h4>}
            </div>
            <div className="answers-list">
                <ul className="answers-list-ul">
                    {answers.map((item) => {
                        return (
                            <li key={item.id}>
                                <QuizAnswers 
                                    title={item.title}
                                    isCorrect={answeredCorrectly}
                                    click={() => {handleQuizAnswer(id, item.id)}}
                                />    
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default QuizItem;