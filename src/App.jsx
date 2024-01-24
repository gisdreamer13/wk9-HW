// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





import Container from 'react-bootstrap/Container'
import Post from "./Components/Post"
import Header from './components/Header'

export default function App(){

  const post = []
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <h1>Anime Go!</h1>
      <h3>Welcome!</h3>

      {post.length > 0 ? postMessage.map((post) => {
        return <Post key={post.id} post={post} />
      }) : <p>No Posts to Display</p>}
    </Container>
  )
}

