import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import Sidebar from './Sidebar'
import { Posts } from "./Posts"

export default function Body({ children }) {

    // const { children } = props
    return (
        <Container>
            <Stack direction='horizontal'>
                <Sidebar />
                { children }
            </Stack>
        </Container>
    )
}
