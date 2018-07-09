export default class ApiQuiz {

    static async get() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10')
            const data = await response.json()
            return data.results
        } catch (error) {
            throw new Error('Не удалось получить список вопросов')
        }
    }

}