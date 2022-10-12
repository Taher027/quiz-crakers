export const getQuizDataFromApi = async () => {
    const getQuizData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizData = await getQuizData.json()
    return { quizData }
}
