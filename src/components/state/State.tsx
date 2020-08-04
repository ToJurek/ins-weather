import React from 'react';
import './State.css';
const errorIcon = require('../../images/error.png')

interface Props {
    error: string,
    isLoaded: boolean
}

function renderLoader() {
    return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>

    )
}

function renderErrorMessage(error: string) {
    return (
        <div>
            <img src={errorIcon} alt={'error'}
                 className={'error-img'}/>
            <span className={'error-message'}>{error}</span>
        </div>
    )
}

function State(props: Props) {
    return (
        <>
            {!props.isLoaded && !props.error && renderLoader()}
            {props.error && renderErrorMessage(props.error)}
        </>
    )
}

export default State
