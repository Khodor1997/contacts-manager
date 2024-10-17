import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'
import ContactCreateForm from './components/contacts/ContactCreateForm'
import axios from 'axios'
import SignUp from './components/auth/SignUp'

function App() {
  const [contacts, setContact] = useState([
    { id: 1, name: 'Pavel', lastName: 'Bobar', phone: '+375295800809', img: '/profile.png', isFavorite: false },
    { id: 2, name: 'John', lastName: 'Doe', phone: '+1234567890', img: '/profile.png', isFavorite: false },
  ])

  useEffect(() => {
    fetchContacts()
  }, []);

  async function fetchContacts() {
    let contacts = await axios.get('https://jsonplaceholder.typicode.com/users')
    setContact(contacts.data)
  }

  const createContact = (newContact) => {
    setContact([...contacts, newContact])
  }

  const removeContact = (contact) => {
    setContact(contacts.filter(e => e.id != contact.id))
  }
  
  return (
    <>
      <SignUp/>
      <Header/>
      <div className='container contact-body'>
        <ContactCreateForm create={createContact}/>
        <ContactsDashboard remove={removeContact} contacts={contacts}/>
      </div>
    </>
  )
}

export default App
