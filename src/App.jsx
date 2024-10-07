import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='container'>
        <ContactsDashboard/>
      </div>
    </>
  )
}

export default App
