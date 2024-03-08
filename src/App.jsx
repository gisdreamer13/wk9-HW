

import Container from 'react-bootstrap/Container'


import { Posts } from "./components/Posts"
import Header from './components/Header'
import Body from './components/Body'
import Random from './components/Random'
import Register from'./components/forms/Register'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import Logout from './components/Logout'
import Add from './components/forms/Add'
import Update from './components/forms/Update'
import Delete from './components/forms/Delete'
import Mylist from './components/Mylist'


export default function App(){

  
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage> <Login /> </FormPage>} />
        <Route path='/register' element={<FormPage><Register/></FormPage>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='/add' element={<FormPage><Add/></FormPage>} />
        <Route path='/update' element={<FormPage><Update/></FormPage>} />
        <Route path='/delete' element={<FormPage><Delete/></FormPage>} />
        <Route path='/mylist' element={<Mylist/>} />
      </Routes>
    </Container>
  )
}

