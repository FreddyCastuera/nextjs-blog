import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState,useEffect } from 'react'
import api from '../api'
import Card from '../components/card'
import Link from 'next/link'

export default function Home() {
  
  const [posts,setPosts]=useState([])
  useEffect(async ()=>{
    setPosts(await api.getAllPost())
  },[posts])

  function deletePost(event){
    const id = event.target.dataset.key;
    api.deletePost(id)

  }
  return (
    <>
    <nav className="container min-w-full h-16 py-3 flex justify-end shadow-xl">
      <Link href="/create-post" >
        <button className="bg-blue-600 px-5 mr-12 text-white rounded">create post</button>
      </Link>
    </nav>
  
      <div className="flex flex-wrap flex-col md:flex-row ">
        {
          posts.map(post=><Card post={post} deletePost={deletePost} />)
        }
      </div>
    </>
    )
}
