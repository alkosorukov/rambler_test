import React from "react";
import PropTypes from 'prop-types';
import Inputbox from "../components/Inputbox"

import '../../sass/question.scss';

export const Question = ({data, onClick}) => {
    const { type, question, answers } = data
    return (
        <div className="question">
            {/* eslint-disable react/no-danger */}
            <h4 dangerouslySetInnerHTML={{ __html: question }} className="question__title" />
            <ul className="question__items">
                {answers.map((answer) => {
                    const itputType = type === "multiple" ? "checkbox" : "radio"
                    return (
                        <li key={answer} className="question__item">
                            <Inputbox id={`answer-input-${answer}`} value={answer} onClick={onClick} textLabel={answer} type={itputType} />
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

Question.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onClick: PropTypes.func.isRequired
}