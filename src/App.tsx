import { useState } from 'react'
import './App.css'
import { User } from "firebase/auth";
import Header from './components/header/Header'
import ContactsDashboard from './components/contacts/ContactsDashboard'
import ContactCreateForm from './components/contacts/ContactCreateForm'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import { useAuth } from './hooks/useAuth'
import IContact from './types/contact';

function App() {
  const [contacts, setContact] = useState<IContact[]>([
    { id: 1, name: 'Pavel', email: 'sdfsdfsdf@mail.ru', phone: '+375295800809', img: '/profile.png', isFavorite: false },
    { id: 2, name: 'John', email: 'Doedddddd@mail.ru', phone: '+1234567890', img: '/profile.png', isFavorite: false },
  ])
  const [showRegistrationForm, setShowRegistrationForm ] = useState<boolean>(false)

  const authUser: User | null = useAuth()

  const createContact = (newContact: IContact) => {
    setContact([...contacts, newContact])
  }

  const removeContact = (contact: IContact) => {
    setContact(contacts.filter(e => e.id != contact.id))
  }
  const redirectToSignUp = () => {
    setShowRegistrationForm(true)
  }
  const redirectToSignIn = () => {
    setShowRegistrationForm(false)
  }
  return (
    <>
      {!authUser ? (
        showRegistrationForm ? (
          <SignUp redirectToSignIn={redirectToSignIn}/>
        ) : (
          <SignIn redirectToSignUp={redirectToSignUp} />
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
