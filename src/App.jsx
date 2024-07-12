import React, { useState , useEffect} from "react";
import PokemonLi from './Components/PokemonLi'
import DisplayPokemon from './Components/DisplayPokemon'
import SearchBar from './Components/SearchBar'
function App() {

  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');
  
  const [name,setName] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [link,setLink] = useState([]);
  const [number,setNumber] = useState([]);
  const [captured, setCaptured] = useState([1,2,3,4,5]);

  const [displayName,setDisplayName] = useState('');
  const [type,setType] = useState([])
  const [image,setImage] = useState('src/assets/images/pokeball.png')
  const [weight,setWeight] = useState('');
  const [cry,setCry] = useState("")


  const mark = (e) => {
    console.log(e , " wants to be marked")
    let newCaptured;
    if (captured.includes(e)){
      newCaptured = captured.filter((num) => num != e);
    }
    else {
      newCaptured = [...captured, e]      
    }
    setCaptured(newCaptured);
  }

  const filter = () => {
    const filteredList = name.filter((e) => e.toLowerCase().includes(query.toLowerCase()));
    setFiltered(filteredList);
    if (query.length <= 0 ){
      setFiltered(name)
      console.log(":VVVV")
    }
  }

  useEffect(() => {
    filter();
  }, [query])

  {
    /*fetch('/')
      .then((r) => r.json())
      .then((d) => setImage(d.sprites.front_default));*/
      /*https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151*/
  }
  useEffect(()=>{
    //console.log("Query has been updated, searching for: "+query)
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
    .then((r)=>r.json())
    .then((d)=>{
      let numbers= [];
      const names = d.results.map((pkm,i)=>{
        numbers.push(i+1)
        return pkm.name
      })
      const links = d.results.map((pkm,i)=>{
        return pkm.url
      })
      setName(names)
      setFiltered(names)
      setLink(links)
      setNumber(numbers);
    })
  },[])


  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  const handleQuery =(e)=>{
    e.preventDefault()
    setQuery(search.toLowerCase())
  }
  const handleDisplayedPokemon = (name)=>{    
    setImage()
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((r)=>r.json())
    .then((d)=>{
      setDisplayName(d.name)
      setType(d.types)
      setImage(d.sprites.front_default)
      setCry(d.cries.legacy)
      setWeight(d.weight)
    })
  }
  return (
    <>
      <header>
        <SearchBar search={search} handleQuery={handleQuery} handleSearch={handleSearch} captured={captured}/>
      </header>
      <section className="container">
        <DisplayPokemon name={displayName} type={type} image={image} cry={cry} weight={weight}/>
        <div className="pkm-list-container">
          {
            filtered.map((e,i)=>(
              <PokemonLi key={Math.random()} name={e} link={link[i]} number={number[i]} handleDisplayedPokemon={handleDisplayedPokemon} captured={captured} mark={mark}/>
            ))
          }
        </div>
      </section>
    </>
  );
}

export default App;
