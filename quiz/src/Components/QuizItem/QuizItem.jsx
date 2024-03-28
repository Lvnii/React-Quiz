import QuizAnswers from "../QuizAnswer/QuizAnswer";
import './QuizItem.css'

const QuizItem = (props) => {
    const { id,
            isAnswered,
            index,
            answeredCorrectly, 
            questionText,
            answers,
            difficulty,
            category,
            handleQuizAnswer,
            userAnswer,
         } = props;

    return (
        <div className="quiz-question-container">
            <div className="question-header">
                <div className="question-details">
                    <div className="question-difficulty">
                        Difficulty: <span className={`${difficulty}`}>{difficulty}.  </span>
                    </div>
                    <div className="question-category">
                        Category: <span>{category}</span>
                    </div>
                </div>
                <h3 className="question-text">
                    <span className="question-number">{index + 1}. </span>
                    <span dangerouslySetInnerHTML={{__html: questionText}}></span>
                </h3>
            </div>
            <div className="answers-list">
                <ul className="answers-list-ul">
                    {answers.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <QuizAnswers 
                                    userAnswer={userAnswer}
                                    isAnswered={isAnswered}
                                    isCorrect={item.isCorrect}
                                    index={index}
                                    title={item.title}
                                    id={item.id}
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