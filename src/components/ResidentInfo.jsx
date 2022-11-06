import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({url}) => {

const [character, setCharacter] = useState({});

useEffect (()=> {
  axios.get(url)
  .then (res => setCharacter(res.data))
},[])









  return (
    <ul className='resident-card'>
      <li className='resident-card-item'>

        <h3>{character.name} </h3> <br />
        <img className='card-image' src={character?.image} alt="" /> 
        <p> Status: {character.status} </p>
        <p> Origin: {character.origin?.name} </p>
        <p> Episodes appareances: {character.episode?.length}</p>
        

        


        
      </li>
    </ul>
  );
};

export default ResidentInfo;