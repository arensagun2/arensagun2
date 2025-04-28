import { useEffect } from 'react'
import './App.css'
// Components
import Header from './components/Header'

function App() {
  useEffect(() => {
    document.title = "Ian Sagun"
  }, [])

  return (
    <>
      <div className='container'>
        <Header />
      </div>
    </>
  )
}

export default App
