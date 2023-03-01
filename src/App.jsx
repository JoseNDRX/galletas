
import './App.css'
import FortuneCookie from './components/FortuneCookie'
import PhraseAuthor from './components/PhraseAuthor'
import phrases from './data/phrases.json'
import { useState } from 'react'

function App() {

  const [ index, setIndex ] = useState (0)

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length))
  }

  const indexBgImg = Math.floor(Math.random() * 4) + 1

  return (
    <div className="App" style={{ backgroundImage: `url(./public/fondo${indexBgImg}.jpg` }}>
      <h1 className="title animate__animated animate__pulse">GALLETAS DE LA<br></br>FORTUNA</h1>

      <FortuneCookie
      phraseData = { phrases [index] }
      />

      <PhraseAuthor
      phraseData = { phrases [index] }
      />

      <button className="button animate__pulse" onClick={ changePhrase }><i class='bx bx-shuffle'><br></br>Prueba otra vez!</i></button>

    </div>

  )
}

export default App
