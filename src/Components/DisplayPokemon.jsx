import React from 'react'

/*
setDisplayName(d.name)
      setType(d.types)
      setImage(d.sprites.front_default)
      setCry(d.cries.legacy)
      setWeight(d.weight)

*/
function DisplayPokemon({name,type,image, cry ,weight}) {
    return (
        <>
        <div className='pkm-display'>
            <div className='pkm-display__card'>
                <img src={image} alt={name} className='pkm-display__image'/>
            </div>
            <div className='pkm-display__info'>
                <ul>
                    <li>
                        <audio controls className='pkm-display__audio'>
                            <source src={cry} type='audio/ogg'/>
                            Your device does not support audio playing...
                        </audio>
                    </li>
                    <li>
                        <p>Weight: <span className='pkm-display__data'>{weight} Lbs</span></p>
                    </li>
                    <li>
                        <p>
                            Type:
                        </p>
                        <span>
                            <ul className='pkm-display__typeList'>
                            {
                                type.map((e)=>(
                                    <li key={Math.random()} className='pkm-display__typeListElement'>
                                        <p>
                                            {e.type.name}
                                        </p>
                                    </li>                                    
                                ))
                            }                                      
                            </ul>                            
                        </span>                                                   
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}


export default DisplayPokemon;