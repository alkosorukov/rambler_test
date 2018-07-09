import React from "react";
import PropTypes from 'prop-types';
import {ResultItem} from './ResultItem';

import '../../sass/result-list.scss';

export const ResultList = ({ sort, data }) =>
    <ul className="result-list">
        {data.map((item) => {
            const styleSort = Object.keys(sort).length ? { 'order': sort[item.difficulty] } : {}

            return <li key={item.question} style={styleSort} className="result-list__item">{ResultItem({item})}</li>
        })
        }
    </ul>

ResultList.defaultProps = {
    sort: {}
}

ResultList.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    sort: PropTypes.objectOf(PropTypes.any)
}