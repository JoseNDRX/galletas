import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const PokemonsList = () => {
    const [ randmCharacters, setRandmCharacters ] = useState( [] )
    const [ pages, setPages ] = useState( { next : null, prev : null } )
    const [ url, setUrl ] = useState( "https://rickandmortyapi.com/api/character"  )

    useEffect(() => {
        
        axios
        .get( url )
        .then( resp => { 
            setRandmCharacters(resp.data.results) 
            setPages( { prev: resp.data.info.prev, next: resp.data.info.next } )
        })
        .catch( error => console.error(error) )
    }, [ url ])

    return (
        <div>
            <h1>Listado de pokemones</h1>

            <ul>
                {
                randmCharacters.map( character => (
                  <Link key={ character.id } to={ `/characters/${character.id}`}>
                  <li> { character.name } </li>
                  </Link>
                ))
                }
            </ul>

            <button 
            onClick={ () => setUrl( pages.prev ) } 
            disabled={ !pages.prev }>
                Anterior
            </button>
            <button 
            onClick={ () => setUrl( pages.next ) } 
            disabled={ !pages.next }>
                Siguiente
            </button>
        </div>
    );
}

export default PokemonsList;
