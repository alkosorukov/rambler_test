import React from "react";
import PropTypes from 'prop-types';

import '../../sass/result-item.scss';

export const ResultItem = ({ item }) => {

    const resultAnswerClass = (tecAnsver, userAnswers, correctAnswer) => {
        let myClass = "quz-result-item__answer"
        const correctAnswerArr = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]

        if (correctAnswerArr.indexOf(tecAnsver)!==-1) {
            myClass += " quz-result-item__answer--correct"
        } else if (userAnswers.indexOf(tecAnsver)!==-1) {
            myClass += " quz-result-item__answer--incorrect"
        }
        return myClass
    }

    return (
        <div className="quz-result-item">
            <header className="quz-result-item__header">
                <h4 className="quz-result-item__h4">
                    <span className="quz-result-item__category">{item.category}</span>
                    <span className="quz-result-item__difficulty">{item.difficulty}</span>
                </h4>
                {/* eslint-disable react/no-danger */}
                <h6 className="quz-result-item__h6" dangerouslySetInnerHTML={{ __html: item.question }} />
            </header>
            {/* eslint-disable react/no-danger */}
            {item.answers.map(answer => {
                const myAnswerClass = resultAnswerClass(answer, item.userAnswers, item.correct_answer)
                return <p className={myAnswerClass} key={answer} dangerouslySetInnerHTML={{ __html: answer }} />
            })}
        </div>
    )
}
ResultItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.any).isRequired
}