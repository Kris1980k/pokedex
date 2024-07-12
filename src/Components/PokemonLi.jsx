import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import '../styles/styles.css'
function PokemonLi({name,link,number,handleDisplayedPokemon,captured,mark}) {
    return (
        <>
            <div className='pkm-element'>
                <div onClick={()=> mark(number)}>
                    {
                        captured.includes(number) ? <div className='pkm-element__check-capturedContainer'>
                            <img src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png' alt="Captured" className='pkm-element__check-image'/>
                        </div> : <FontAwesomeIcon icon={faCircle}  className='pkm-element__check-btn'/>  
                    }
                </div>
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