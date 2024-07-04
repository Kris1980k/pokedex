import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import '../styles/styles.css'
function PokemonLi({name,link,number,handleDisplayedPokemon}) {
    return (
        <>
            <div className='pkm-element'>
                <FontAwesomeIcon icon={faCircle}  className='pkm-element__check-btn'/>
                <div className='pkm-element__inside' onClick={()=>handleDisplayedPokemon(name)}>                    
                    <p className='pkm-element__name'>                
                        {number} {name}
                    </p>
                </div>
            </div>
        </>
    );
}

export default PokemonLi;