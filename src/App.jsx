import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'
import ContactCreateForm from './components/contacts/ContactCreateForm'

function App() {
  const [contacts, setContact] = useState([
    { id: 1, name: 'Pavel', lastName: 'Bobar', phone: '+375295800809', img: '/profile.png', isFavorite: false },
    { id: 2, name: 'John', lastName: 'Doe', phone: '+1234567890', img: '/profile.png', isFavorite: false },
  ])

  const createContact = (newContact) => {
    setContact([...contacts, newContact])
  }

  const removeContact = (contact) => {
    setContact(contacts.filter(e => e.id != contact.id))
  }
  
  return (
    <>
      <Header/>
      <div className='container contact-body'>
        <ContactCreateForm create={createContact}/>
        <ContactsDashboard remove={removeContact} contacts={contacts}/>
      </div>
    </>
  )
}

export default App
