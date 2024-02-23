import { useState } from "react"

export default function Add() {

    const [anime, setAnime] = useState({ name: '', img: ''})

    async function addAnime(){
        const res = await fetch('http://127.0.0.1:5000/anime',{
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(anime)
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        addAnime()
        console.log(anime);
        setAnime({name:'',img:''})
    }

    return (
        <>
        <div onChange={(e) => setAnime({ ...anime, name, img })}>
            <h3>Add</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Title Name</label><br />
                <input type="text" name='name' value={anime.name} onChange={(e) => setAnime({ ...anime, name: e.target.value })} /><br />
                <label htmlFor="img">Img Link</label><br />
                <input type="img" name='img' value={anime.img} onChange={(e) => setAnime({ ...anime, img: e.target.value })}/><br />
                <input type="Submit" value='Request'/>
            </form>
        </div>
        </>
    )

}