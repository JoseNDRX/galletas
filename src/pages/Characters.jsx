import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {

  const [ randmCharacters, setRandmCharacters ] = useState([])
  const [ pages, setPages ] = useState( { prev: null, next: null })

  useEffect ( () => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then( resp => {
        setRandmCharacters(resp.data.results)
        setPages( { prev: resp.data.info.prev, next: resp.data.info.next } )
      })
      .catch( error => console.error(error))
  },[])

  const nextPage = () => {
    axios
      .get( pages.next )
      .then( resp => {
        setRandmCharacters(resp.data.results)
        setPages( { prev: resp.data.info.prev, next: resp.data.info.next } )
      })
      .catch( error => console.error(error))
  }
  const prevPage = () => {
    axios
      .get( pages.prev )
      .then( resp => {
        setRandmCharacters(resp.data.results)
        setPages( { prev: resp.data.info.prev, next: resp.data.info.next } )
      })
      .catch( error => console.error(error))
  }
  
  return (
    <div>
      <h1>Listado de personajes</h1>
      <ul className="charactersList">
        {
          randmCharacters.map( character => (
            <Link key={ character.id } to={ `/characters/${character.id}`}>
            <li> { character.name } </li>
            </Link>
          ))
        }
      </ul>
      <button 
        onClick={ prevPage }
        disabled={ !pages.prev }>
        Anterior
      </button>
      <button 
        onClick={ nextPage }
        disabled={ !pages.next }>
        Siguiente
      </button>
    </div>
  );
};

export default Characters;
