

import Container from 'react-bootstrap/Container'


import { Posts } from "./components/Posts"
import Header from './components/Header'
import Body from './components/Body'
import Random from './components/Random'
import Register from'./components/forms/Register'


export default function App(){

  
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      {/* <h1>Anime Go!</h1>
      <h3>Welcome!</h3> */}
      <Body>
        {/* <Posts /> */}
        {/* <Random /> */}
        <Register />
      </Body>
    </Container>
  )
}

