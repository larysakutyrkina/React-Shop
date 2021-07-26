import React, {Component} from 'react';
import style from "./Button.module.scss";

class Button extends Component {
    render() {
        const {children, backgroundColor, onClick} = this.props;
        return (
            <button
                className={`${style.btn}`}
                onClick={onClick}
                style={{backgroundColor: backgroundColor}}
            >
                {children}
            </button>
        );
    }
}

export default Button;