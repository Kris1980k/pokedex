import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
function SearchBar({search,handleQuery,handleSearch}) {
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
        </nav>
    </>);
}

export default SearchBar;