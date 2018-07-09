import React, { Component } from "react";
import PropTypes from 'prop-types';

import { SortStatus } from "../components/SortStatus"
import { ResultList } from "../components/ResultList"

import '../../sass/question.scss';

export default class QuizRezult extends Component {

    state = { sort: this.props.sort[Object.keys(this.props.sort)[0]] }

    changeSort = () => this.setState({ sort: [...this.state.sort].reverse() })

    convertSort = () => {
        const sortingRules = {}
        this.state.sort.forEach((el, i) => {
            sortingRules[el] = i
        });
        return sortingRules
    }

    render() {

        return (
            <div className="quz-result">
                {this.state.sort.length > 2 ? SortStatus({ sort: this.state.sort, onClick: this.changeSort, label: "Отсортировать вопросы:" }) : null}
                <div className="quz-result__items">{ResultList({ sort: this.convertSort(), data: this.props.quiz })}</div>
            </div>
        )
    }
}

QuizRezult.defaultProps = {
    sort: []
}

QuizRezult.propTypes = {
    quiz: PropTypes.arrayOf(PropTypes.object).isRequired,
    sort: PropTypes.objectOf(PropTypes.array)
}