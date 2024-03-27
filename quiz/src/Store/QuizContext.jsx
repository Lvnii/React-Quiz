import { createContext, useCallback, useContext, useState } from "react";

const QuizContext = createContext({});

export const QuizContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        try {
            const result = await fetch("https://opentdb.com/api.php?amount=10");
            const data = result.json();
            console.log(data)
        } catch (error) {

        }
    }, [])

    return (
        <QuizContextProvider>
            {props.children}
        </QuizContextProvider>
    )
}

const useQuiz = () => useContext(QuizContext)

export default useQuiz;