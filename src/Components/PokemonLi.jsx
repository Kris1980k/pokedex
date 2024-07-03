import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import '../styles/styles.css'
function PokemonLi({name,link,number}) {
    return (
        <>
            <div className='pkm-element'>
                <FontAwesomeIcon icon={faCircle}  className='pkm-element__check-btn'/>
                <div className='pkm-element__inside'>                    
                    <a href={link} className='pkm-element__name'>                
                        {number} {name}
                    </a>
                </div>
            </div>
        </>
    );
}

export default PokemonLi;