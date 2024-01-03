import axios from "axios";

import { useState, useEffect } from "react"

import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPost = async () => {

    try {

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

      const data = response.data;

      console.log(data)

      setPosts(data)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    getPost()


  }, [])

  return (
    <div>
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className="btn">
              ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home