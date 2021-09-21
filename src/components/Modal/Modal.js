import React, {Component} from 'react';
import style from "./Modal.module.scss";

class Modal extends Component {
    render() {
        const {backgroundColor, header, closeButton, onHide, text, actionCart} = this.props
        return (
            <div>
                <div className={style.modal} style={{backgroundColor: backgroundColor}}>
                    <div className={style.header}>
                        <h3 className={style.title}>{header}</h3>
                        <a className={style.closeBtn} onClick={onHide}>{closeButton}</a>
                    </div>
                    <div className={style.text}>{text}</div>
                    <button className={style.footerBtn} onClick={actionCart} style={{backgroundColor: backgroundColor}}>OK</button>
                    <button className={style.footerBtn} onClick={onHide} style={{backgroundColor: backgroundColor}}>Cancel</button>
                </div>
                <div className={style.overlay} onClick={onHide}></div>
            </div>
        );
    }
}

export default Modal;