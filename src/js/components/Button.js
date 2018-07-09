import React from "react";
import PropTypes from 'prop-types';

import '../../sass/button.scss';

export const Button = ({ text, onSubmit, disabled }) => <button onClick={onSubmit} disabled={disabled} className="quiz__button">{text}</button>

Button.defaultProps = {
    disabled: false
}

Button.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}