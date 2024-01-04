import blogFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./Admin.css"

const Admin = () => {

    const [posts, setPosts] = useState([])

    const getPost = async () => {
        try {
            const response = await blogFetch.get('/posts')
            const data = response.data;
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }
const deletePost = async (id)=>{
    await blogFetch.delete(`/posts/${id}`)

    const filteredPostv= posts.filter((post)=>{post.id !== id})
    setPosts(filteredPostv)
}

    useEffect(() => {
        getPost()

    }, [])

    return (
        <div className="admin">
            <h2>Gerenciar Posts</h2>
            {posts.length === 0 ? (<p>Carregando...</p>)
                : (
                    posts.map((post) => (
                        <div className="post" key={post.id}>
                            <h1>{post.title}</h1>
                            <div className="actions">
                            <Link className="btn edit-btn">Editar</Link>
                            <button className="btn delete-btn"onClick={()=>deletePost(post.id)} >Excluir</button>
                            </div>
                        </div>
                    ))
                )}
        </div>
    )
}

export default Admin