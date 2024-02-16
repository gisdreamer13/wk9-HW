import { useState } from 'react'
import React, { useEffect } from 'react';
import { Container } from "react-bootstrap"

const URL = 'http://127.0.0.1:5000/anime';

export default function Land() {
    const [results, setResults] = useState()
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setResults(data);
        }

        getData()

        console.log(results, "results")
    }, []);


  return (
    <h1>Welcome</h1>
  )
}
