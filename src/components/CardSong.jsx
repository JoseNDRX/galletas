import React from 'react';
import './CardSong.css'

const CardSong = ({titulo, album, banda, release, genre}) => {
  return (
    <div className="cardSong">
      <div>
      <h1 className="cardSong__title">{titulo}</h1>
      <ul className="cardSong__list">
        <li className="cardSong__list--list"><span>Álbum:</span> {album}</li>
        <li className="cardSong__list--list"><span>Banda:</span> {banda}</li>
        <li className="cardSong__list--list"><span>Fecha de lanzamiento:</span> {release}</li>
        <li className="cardSong__list--list"><span>Género:</span> {genre}</li>
      </ul>
      </div>
    </div>
  );
};

export default CardSong;