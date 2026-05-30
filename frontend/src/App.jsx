import { useState } from 'react'
import GameGenerator from './components/GameGenerator'
import GamePreview from './components/GamePreview'
import './App.css'

function App() {
  const [gameCode, setGameCode] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <h1>🎮 Saya Bot AI</h1>
        <p>Game Generator - Buat game HTML dengan AI!</p>
      </header>
      
      <main className="container">
        <div className="grid">
          <GameGenerator 
            onGameGenerated={setGameCode}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          {gameCode && <GamePreview gameCode={gameCode} />}
        </div>
      </main>
    </div>
  )
}

export default App
