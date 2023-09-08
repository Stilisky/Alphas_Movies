import React from 'react'

const Choicefilm = ({film}) => {
    return (
        <div>
            <select value={catSel} onChange={choiceCat}>
                {categories.map((cat) => (
                    <option key={cat._id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <label>Choice film</label>
            <select value={movie} onChange={choiceMovie}>
                {/* <option>default</option> */}
                {films && films.map((film) => {
                    // console.log(films);
                    <option key={film.id}>Test</option>
                    // <div>{film.title}</div>
                })}
            </select>
        </div>
    )
}

export default Choicefilm