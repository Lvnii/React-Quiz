import { useEffect } from "react";
import useQuiz from "../../Store/QuizContext";
import QuizItem from "../QuizItem/QuizItem";

const QuizList = () => {
    const { data, loading, getData, handleQuizAnswer } = useQuiz();

    console.log(data)

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="quiz-list-container">
            {loading ? <p>Loading...</p> : (
                <ul>
                    {data.map((item) => {
                        return (
                            <li 
                                className="quiz-item-li"
                                key={item.id}
                            >
                                <QuizItem 
                                    id={item.id}
                                    questionText={item.question}
                                    answers={item.answers}
                                    difficulty={item.difficulty}
                                    category={item.category}
                                    handleQuizAnswer={handleQuizAnswer}
                                    answeredCorrectly={item.answeredCorrectly}
                                />
                            </li>
                        )
                        })
                    }
                </ul>
            )}
        </div>
    )
}

export default QuizList;