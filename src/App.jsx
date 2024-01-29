

import Container from 'react-bootstrap/Container'


import { Posts } from "./components/Posts"
import Header from './components/Header'
import Body from './components/Body'
import Random from './components/Random'
import Register from'./components/forms/Register'
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import Login from './components/forms/Login'


export default function App(){

  
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <FormPage>
        <Login  />
      </FormPage>
    </Container>
  )
}

