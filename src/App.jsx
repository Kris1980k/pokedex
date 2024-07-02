import React, { useState , useEffect} from "react";
import PokemonLi from './Components/PokemonLi'
function App() {

  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');

  const [name,setName] = useState([]);
  const [link,setLink] = useState([]) 

  {
    /*fetch('/')
      .then((r) => r.json())
      .then((d) => setImage(d.sprites.front_default));*/
  }
  useEffect(()=>{
    console.log("Query has been updated, searching for: "+query)
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((r)=>r.json())
    .then((d)=>{
      const names = d.results.map((pkm,i)=>{
        return pkm.name
      })
      const links = d.results.map((pkm,i)=>{
        return pkm.url
      })
      setName(names)
      setLink(links)
    })
  },[])
  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  const handleQuery =(e)=>{
    e.preventDefault()
    setQuery(search.toLowerCase())
  }

  return (
    <>
      <h1>Hello from pokedex</h1>
      <form action="" onSubmit={handleQuery}>
        <input type="text" value={search} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      {
        name.map((e,i)=>(
          <PokemonLi name={e} link={link[i]}/>
        ))
      }
    </>
  );
}

export default App;
