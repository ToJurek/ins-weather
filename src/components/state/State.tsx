import React from 'react';
import './State.css';

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
            <img src={'https://cdn4.iconfinder.com/data/icons/multisizeicon/512/baru-78-512.png'}
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
