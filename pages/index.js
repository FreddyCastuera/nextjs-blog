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
        <button className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold p-1 mt-2 md:mt-0 px-3 mr-5">create post</button>
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
