import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'
import Pagination from './components/Pagination'

function App() {
  const [rickNmorty, setRickNmorty] = useState([])
  const [typeId, setTypeId] = useState("")

  
  const [charactersPerPage, SetcharactersPerPage] = useState(12);
  const [currentPage, SetCurrentPage] = useState (1)

  const lastIndex =  currentPage * charactersPerPage
  const firstIndex =  lastIndex - charactersPerPage

  useEffect (()=> {
    const randomId = Math.floor(Math.random( )* 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then (res => setRickNmorty(res.data));

  }, [])



  const searchId = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then (res => setRickNmorty(res.data));

    if(typeId > 126) {
      alert("No Existe ese id")
    }
  }


  

    

  return (
    <div className="App">
       
      <header>
          <h1> LOCATIONS</h1>
      </header>
     

      <div className='input-search'>
        <input type="text"  
          value={typeId}
          placeholder = "Type a location id (1 to 126)" 
          onChange = {e => setTypeId(e.target.value) }/>
        <button onClick={searchId} onKeyDown= {searchId}>Search ID</button>
        
      </div>

      
     

      <div className='location-info'>
        <h2>
          <b>{rickNmorty.name}</b>
        </h2>

        <h3>
          Type : {rickNmorty.type}
        </h3>

        <h3>
          Dimension : {rickNmorty.dimension} 
        </h3>

        <h3>
          Residents Quantity : {rickNmorty.residents?.length}
        </h3>

        <div className='underline'></div>

      </div>

      
      <ul className='resident-card'>
        {rickNmorty.residents?.map(residentUrl => (
          <ResidentInfo 
            url = {residentUrl}
            key = {residentUrl}
          />)
        ).slice(firstIndex, lastIndex)}
      </ul>
      
      
     <Pagination  
        charactersPerPage = {charactersPerPage} 
        currentPage = {currentPage}
        SetCurrentPage = {SetCurrentPage}
        totalCharacters = {rickNmorty.residents?.length}

    />



      <footer>
        <h5>Made with 🤍 in Academlo</h5>
        <h5>By © Manuel Lufan</h5>
      </footer>

    </div>
  )
}

export default App
