import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const naviagte = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const { id } = useParams()

    const getPost = async () => {
        try {

            const response = await blogFetch.get(`/posts/${id}`)

            const data = response.data;

            setTitle(data.title);
            setBody(data.body)

        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (e) => {
        e.preventDefault()

        const post = { title, body, useId: 1 }

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        })
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="new-post">
            <h2>Editando : {title}</h2>
            <form onSubmit={(e) => editPost(e)} >
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o rirulo"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title || ""}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea type="text" name="body" id="body" placeholder="Digite o conteudo"
                        onChange={(e) => setBody(e.target.value)}
                        value={body || ""}
                    />
                </div>
                <input type="submit" value="Editar post" className="btn" />
            </form>
        </div>
    )
}

export default EditPost