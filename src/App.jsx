import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardSong from './components/CardSong'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola, esto es: Vite + React</h1>
      <Button
      name='Cancelar'
      />
      <Button
      name='Aceptar'
       />
      <Button
      name='Iniciar sesión'
       />
      <CardSong
      titulo='Viva La Vida'
      album='Viva la Vida or Death and All His Friends'
      banda='Coldplay'
      release='12 de junio de 200'
      genre='Pop barroco'
      />
      <CardSong
      titulo='Fix you'
      album='X&Y'
      banda='Coldplay'
      release='5 de septiembre de 2005'
      genre='Rock, Rock alternativo, Soft rock'
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
