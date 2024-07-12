import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCircle} from '@fortawesome/free-solid-svg-icons'
function SearchBar({search,handleQuery,handleSearch,captured}) {
    return (<>
        <nav className='navbar'>
            <div className='navbar__title'>
                <h1 className=''>Pokedex</h1>
            </div>
            <form action="" onSubmit={handleQuery}>
                <input type="text" value={search} onChange={handleSearch} className='navbar__input' placeholder='Search/Filter'/>
                <button type="submit" className='navbar__button'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>            
            </form>
            <div className='navbar__icon'>
                <img src='src/assets/images/pokeball.png' alt="Captured" className='pkm-element__check-image'/>
                <span className='pkm-element__number'>{captured.length}</span>
            </div>
            <div className='navbar__icon'>
                <FontAwesomeIcon icon={faCircle}  className='pkm-element__check-btn'/>  
                <span className='pkm-element__number'>{151 - captured.length }</span>
            </div>
        </nav>
    </>);
}

export default SearchBar;