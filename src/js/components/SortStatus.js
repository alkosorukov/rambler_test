import React from "react";
import PropTypes from 'prop-types';
import { Button } from './Button';

import '../../sass/sortstatus.scss';

export const SortStatus = ({ sort, onClick, label }) =>
    <div className="sort-status">{label}<Button className="sort-status__button" onSubmit={onClick} text={sort.join(' → ')} /></div>

SortStatus.defaultProps = {
    label: ''
}

SortStatus.propTypes = {
    sort: PropTypes.arrayOf(PropTypes.any).isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string
}