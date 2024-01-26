import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function SIdebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Top Rated</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>My List</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}
