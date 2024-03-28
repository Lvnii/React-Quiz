import { useEffect } from "react";
import useQuiz from "../../Store/QuizContext";
import QuizItem from "../QuizItem/QuizItem";
import './QuizList.css'

const QuizList = () => {
    const { data, loading, getData, handleQuizAnswer, } = useQuiz();

    console.log(data)

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="quiz-list-container">
            {loading ? <p>Loading...</p> : (
                <ul className="questions-list-ul">
                    {data.map((item, index) => {
                        return (
                            <li 
                                className="quiz-item-li"
                                key={item.id}
                            >
                                <QuizItem 
                                    {...item}
                                    questionText={item.question}
                                    handleQuizAnswer={handleQuizAnswer}
                                    index={index}
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