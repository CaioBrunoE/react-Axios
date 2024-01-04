import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const naviagte = useNavigate()

    const [title, settitle] = useState()
    const [body, setBody] = useState()

    const { id } = useParams()

    return (
        <div className="new-post">
            <h2>Editando : {title}</h2>
            <form onSubmit={(e) => createPost(e)} >
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o rirulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea type="text" name="body" id="body" placeholder="Digite o conteudo"
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <input type="submit" value="Editar post" className="btn" />
            </form>
        </div>
    )
}

export default EditPost