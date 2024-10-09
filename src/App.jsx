import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'
import ContactCreateForm from './components/contacts/ContactCreateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='container contact-body'>
        <ContactCreateForm/>
        <ContactsDashboard/>
      </div>
    </>
  )
}

export default App
