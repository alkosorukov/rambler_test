import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import '../../sass/inputbox.scss';

export default class Inputbox extends PureComponent {
    state = { checked: this.props.isChecked }

    checkClick = (e) => {
        this.setState({ checked: !this.state.checked })
        this.props.onClick(e)
    }

    render() {
        const { textLabel, value, id, type } = this.props
        const inputStylePrefix = `question__${type}`

        return <label htmlFor={id} className="question__label">
            <span className={this.state.checked ? `${inputStylePrefix} ${inputStylePrefix}--checked` : inputStylePrefix}>
                
                <input className={`${inputStylePrefix}-input`} value={value} id={id} type={type} onClick={this.checkClick} />

            </span>
            {/* eslint-disable react/no-danger */}
            <span dangerouslySetInnerHTML={{ __html: textLabel }} />
        </label>
    }
}
Inputbox.defaultProps = {
    isChecked: false
}

Inputbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isChecked: PropTypes.bool
}