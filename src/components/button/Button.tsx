import React from 'react';
import './Button.css';

interface Props {
    name: string
    handleClick: any
}

function Button(props: Props) {
    return (<button className={'refresh-button'} onClick={() => props.handleClick()}>{props.name}</button>)
}

export default Button
