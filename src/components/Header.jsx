import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

export default function Header() {

  const { user } = useContext(UserContext)

  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Anime Go!</Navbar.Brand>
          {/* <Nav.Link href='/register'>Register</Nav.Link> */}
                {user.username ?
                    <Link to='/logout'>Logout</Link> :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/add'>Add Show</Link>
                        <Link to='/update'>Update Show</Link>
                        <Link to='/delete'>Delete Show</Link>
                    </>
                }
        </Container>
</Navbar>
  )
}
