import { createContext, useCallback, useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';

const QuizContext = createContext({});

export const QuizContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const restructureQuizArray = useCallback((quizArray) => {
        const newArray = quizArray.map((item, questionIndex) => {
            const answers = item.incorrect_answers.map((answerItem, index) => {
                return {
                    id: index,
                    isCorrect: false,
                    title: answerItem, 
                }
            })

            const randomIndex = Math.floor(Math.random() * (answers.length + 1))

            answers.splice(randomIndex, 0, {
                id: 4,
                isCorrect: true,
                title: item.correct_answer,
            })
            return {
                ...item,
                id: questionIndex,
                isAnswered: false,
                answers: answers,
                answeredCorrectly: null,
            }
        })

        return newArray
    }, [data.result]);

    const handleQuizAnswer = useCallback((questionId, answerId) => {
        const foundQuestion = data.find(item => item.id === questionId)
        if (foundQuestion.isAnswered) return
        setData((prevState) => {
            return [...prevState.map((item) => {
                if(questionId !== item.id) {
                    return {
                        ...item
                    }
                } else {
                    let answered = item.answers.find((answerItem) => 
                    answerItem.id === answerId)
                    
                    return {
                        ...item,
                        isAnswered: true,
                        userAnswer: answerId,
                        answeredCorrectly: answered.isCorrect
                    }
                }
            })]
        })
    }, [data])

    const getData = useCallback(async () => {
        if(loading) return
        setLoading(true)
        try {
            const result = await fetch("https://opentdb.com/api.php?amount=10");
            const data = await result.json();
            restructureQuizArray(data.results)
            setData(restructureQuizArray(data.results))
            setLoading(false)
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Okay'
              })
            setLoading(false)
        }
    }, [loading, restructureQuizArray])

    return (
        <QuizContext.Provider value={{
                data,
                loading,
                getData,
                handleQuizAnswer,
            }}>
            {props.children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export default useQuiz;