import React, { Component, Fragment } from "react";

import { Question } from "../components/Question"
import { Progressbar } from "../components/Progressbar"
import { Loader } from "../components/Loader"
import { Button } from "../components/Button"
import QuizResult from "./QuizResult"
import ApiQuiz from "../plugins/apiQuiz"

import '../../sass/quiz.scss';

export default class Quiz extends Component {

    state = {
        userAnswers: [],
        step: -1
    }

    async componentDidMount() {
        this.quiz = await ApiQuiz.get()
        /* eslint-disable */
        // console.log('quiz', this.quiz);
        this.setState({step:0});
    }

    setAnswer = (e) => {

        const cloneUserAnswers = [...this.state.userAnswers]
        if (e.target.checked) {
            cloneUserAnswers[this.state.step] = { ...cloneUserAnswers[this.state.step], [e.target.value]: e.target.checked }
        } else {
            delete cloneUserAnswers[this.state.step][e.target.value];

            if (!Object.keys(cloneUserAnswers[this.state.step]).length) cloneUserAnswers.pop()
        }

        this.setState({ userAnswers: cloneUserAnswers })
  
        this.quiz[this.state.step].userAnswers = Object.keys(cloneUserAnswers[this.state.step])
    }

    quiz = []

    nextStep = () => {
        this.setState({ step: this.state.step + 1 })
    }

    render() {

        const step = this.state.step
        const isLoader = step === -1
        const quizLength = this.quiz.length

        const isQuestion = !isLoader && step < quizLength
        const isResult = !isLoader && this.state.userAnswers.length && step === quizLength

        const activeButtonNext = !isLoader && (step > quizLength || (this.state.userAnswers.length > step && Object.keys(this.state.userAnswers[step]).length))

        return (
            <Fragment>
            <div className="quiz">
                {(() => {
                    if (isQuestion) {
                        const tecQuestion = this.quiz[step]
                        const tecIncorrectAnswer = Array.isArray(tecQuestion.incorrect_answers) ? tecQuestion.incorrect_answers : [tecQuestion.incorrect_answers]
                        const tecCorrectAnswer = Array.isArray(tecQuestion.correct_answer) ? tecQuestion.correct_answer : [tecQuestion.correct_answer]
                        this.quiz[step] = { ...tecQuestion, answers: [...tecIncorrectAnswer, ...tecCorrectAnswer] }

                        return (<Fragment>{Question({data:this.quiz[step], onClick: this.setAnswer})}</Fragment>)
                    }
                })()}
                {isResult ? <QuizResult quiz={this.quiz} sort={{difficulty:['easy','medium','hard']}} /> : null}
                {isLoader || isResult ? null : <Button text='Далее' onSubmit={this.nextStep} disabled={!activeButtonNext} />}
                {isLoader ? <Fragment>{Loader('Загрузка опроса...')}</Fragment> : null}
            </div>
            <footer>{Progressbar({start:step, end:quizLength})}</footer>
            </Fragment>
        )
    }
}