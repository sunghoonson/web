import React from 'react'

function Movie({ id, title, language, release, length, author, production, divide }){
    return (
        <div id={id}>
            <h1>무비 정보</h1>
            <h3>{title}</h3>
            <h3>{language}</h3>
            <h3>{release}</h3>
            <h3>{length}</h3>
            <h3>{author}</h3>
            <h3>{production}</h3>
            {divide}            
        </div>
    )
}
export default Movie