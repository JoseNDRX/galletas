
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'
import CharactersList from './pages/CharacterList'

function App() {
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route
          path='/'
          element={ <Home />}
          />
          <Route
          path='/characters'
          element={ <Characters />}
          />
          <Route
          path='/characterslist'
          element={ <CharactersList />}
          />
          <Route 
          path='/characters/:id'
          element={ <CharacterDetail /> }          
          />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
