import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

interface Props {
    city: string
}

function Header(props: Props) {
    return (
        <div className={'header'}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={'map-marker'}/>
            <span className={'city'}>{props.city}</span>
        </div>
    )
}

export default Header;
