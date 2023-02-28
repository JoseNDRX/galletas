
import './App.css'
import FortuneCookie from './components/FortuneCookie'
import phrases from './data/phrases.json'
import { useState } from 'react'



function App() {

  const [ index, setIndex ] = useState (0)

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length))
  }

  const indexBgImg = Math.floor(Math.random() * 5)

  return (
    <div className="App" style={{ backgroundIMage: `url(/fondo${indexBgImg}.jpg` }}>
      <FortuneCookie
      phraseData = { phrases [index] }
      />

      <button onClick={ changePhrase }><i class='bx bx-shuffle'></i></button>

    </div>

  )
}

export default App
