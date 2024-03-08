import { useState } from "react";
export default function Delete() {
    const [anime, setAnime] = useState({ name: '', id: '' });
    async function deleteAnime() {
        const res = await fetch(`http://127.0.0.1:5000/anime/${anime.id}`, {
            method: "DELETE",
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(anime)
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        deleteAnime();
    }
    return (
        <>
            <div>
                <h3>Delete Anime</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Title Name</label><br />
                    <input
                        type="text"
                        name="name"
                        value={anime.name}
                        onChange={(e) => setAnime({ ...anime, name: e.target.value })}
                    /><br />
                    <label htmlFor="id">ID</label><br />
                    <input
                        type="text"
                        name="id"
                        value={anime.id}
                        onChange={(e) => setAnime({ ...anime, id: e.target.value })}
                    /><br />
                    <input type="submit" value="Delete" />
                </form>
            </div>
        </>
    );
}