import { useState } from 'react'

import { Container } from "react-bootstrap"


export default function Random() {

    const [whateverAnime, setWhateverAnime ] = useState('')

    const anime = [
        'Jujutsu Kaisen',
        'Solo Leveling',
        'Shangri-La Frontier',
        'Afro Samurai',
        'Black Clover',
        'Tokyo Revenger',
        'Tokyo Ghoul',
        'One Punch Man',
        'Demon Slayer',
        'Rouroni Kenshin',
        'Hell"s Paradise'
    ]

    function randomAnime(){
        setWhateverAnime( anime[Math.floor(Math.random() * anime.length)] )
        console.log(whateverAnime);
        // return whateverAnime
    }

    

  return (
    <Container>
        <h3>Surprise Me</h3>
        <p>Anime: {whateverAnime}</p>
        <button onClick={randomAnime}>Hit Me</button>
    </Container>
  )
}
