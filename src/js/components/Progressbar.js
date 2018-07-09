import React from "react";
import PropTypes from 'prop-types';

import '../../sass/progressbar.scss';

export const Progressbar = ({ start, end }) => {
    const progress = start / end * 100;
    return (
        <div className="progressbar">
            <div className="progressbar__progress">На <span>{start}</span> из <span>{end}</span> отвечено</div>

            <div className="progressbar__bar"><div style={{ width: `${progress}%` }}>&nbsp;</div></div>
        </div>
    )
}

Progressbar.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
}