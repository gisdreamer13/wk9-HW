import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import Sidebar from './Sidebar'
import { Posts } from "./Posts"

export default function Body({ sidebar, children }) {

    // const { children } = props
    return (
        <Container>
            <Stack direction='horizontal'>
                { sidebar && <Sidebar />}
                <container>
                    { children }
                </container>
            </Stack>
        </Container>
    )
}
