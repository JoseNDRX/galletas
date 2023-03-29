import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CharacterDetail = () => {

  const [ data, setData ] = useState( { } )
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect( () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then( resp => setData (resp.data))
      .catch( error => console.error(error) )
  }, [ id ] )
  return (
    <div className='detail'>
      <h1>Detalle del personaje {data.name}</h1>
      <div className="residentCard">
        <img className="card__image" src={ data.image} alt="image" />
        <ul>
          <li className="card__status">Estatus: { data.status }</li>
          <li>Especie: { data.species }</li>
          <li>Tipo: { data.type }</li>
          <li>Genero: { data.gender }</li>
          <li>Origen: { data.origin?.name }</li>
        </ul>
      </div>
      <button onClick={ () => navigate(-1)}>Atrás</button>
    </div>
  );
};

export default CharacterDetail;