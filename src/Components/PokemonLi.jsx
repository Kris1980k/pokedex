import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import '../styles/styles.css'
function PokemonLi({name,link}) {
    return (
        <>
            <div>
                <a href={link}>
                <FontAwesomeIcon icon={faCircle} />
                    {name}
                </a>
            </div>
        </>
    );
}

export default PokemonLi;