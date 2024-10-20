import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'
import ContactCreateForm from './components/contacts/ContactCreateForm'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
// import AuthDetails from './components/auth/AuthDetails'
import { useAuth } from './hooks/useAuth'

function App() {
  const [contacts, setContact] = useState([
    { id: 1, name: 'Pavel', lastName: 'Bobar', phone: '+375295800809', img: '/profile.png', isFavorite: false },
    { id: 2, name: 'John', lastName: 'Doe', phone: '+1234567890', img: '/profile.png', isFavorite: false },
  ])

  const [showRegistrationForm, setShowRegistrationForm ] = useState(false)

  const authUser = useAuth()

  const createContact = (newContact) => {
    setContact([...contacts, newContact])
  }

  const removeContact = (contact) => {
    setContact(contacts.filter(e => e.id != contact.id))
  }
  const redirectToSignUp = () => {
    setShowRegistrationForm(true)
  }
  return (
    <>
      {!authUser ? (
        showRegistrationForm ? (
          <SignUp />
        ) : (
          <SignIn toSignUpForm={redirectToSignUp} />
        )
      ) : (
        <>
          <Header />
          <div className="container contact-body">
            <ContactCreateForm create={createContact} />
            <ContactsDashboard authUser={authUser} remove={removeContact} contacts={contacts} />
          </div>
        </>
      )}
    </>
  )
}

export default App
