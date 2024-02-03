import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Anime Go!</Navbar.Brand>
          <Nav.Link href='/register'>Register</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Container>
</Navbar>
  )
}
