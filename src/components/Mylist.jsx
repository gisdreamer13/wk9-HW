import { useState } from 'react'
import React, { useEffect } from 'react';
import { Container } from "react-bootstrap"

const URL = 'http://localhost:5173/Mylist';

export default function myList() {
    const [results, setResults] = useState([])
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setResults(data.animes);
        }

        getData()

        console.log(results, "results")
    }, []);



    return (
        <div>
          <h1>My List</h1>
          <div className='item-container'>
            {results.map((results) => (
              <div className='card'>
                <img src={results.img} alt='' />
                <h3>{results.name}</h3>
                <button>Add To My List</button>
              </div>
            ))}
          </div>
        </div>
      );
    };