import axios from "axios";

import { useState, useEffect } from "react"

import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {

  const [post, setPost] = useState([])

  const getPost = async () => {

    try {

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

      const data = response.data;

      console.log(data)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    getPost()


  }, [])

  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default Home