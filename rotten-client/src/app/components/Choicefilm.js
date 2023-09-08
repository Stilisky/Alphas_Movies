"use client"
import React, { useState } from 'react'

const Choicefilm = ({films, handle}) => {
    const [movie, setMovie] = useState('')

    const handleChoice = (e) => {
        handle(e.target.value)
    }

    return (
        <div>
            <label>Choice film</label>
            <select value={movie} onChange={handleChoice}>
                {films.map((film) => {
                    <option key={film.id}>{film.title}</option>
                })}
            </select>
        </div>
    )
}

export default Choicefilm