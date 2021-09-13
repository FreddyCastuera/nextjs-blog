import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import api from '../api'

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

function Card(props){
  const {image,user,title,content,reactions,comments,key}=props.post
  const {deletePost} = props
  return (
  
  <div className=" w-full md:w-3/12  p-5 mx-5 shadow-xl rounded-xl flex flex-col justify-around"> 
    <div>
      <div className="">
        <img className="max-h-72 w-full object-cover" src={image} alt=""/>
      </div>
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
    </div>
    <div className="flex flex-row justify-around">
      <Link href={`/posts/${key}`}>
        <a 
        className="border-1 rounded bg-blue-700 w-2/6 text-center text-white py-2"
        href="">ver</a>
      </Link>
      <button 
        data-key={key}  
        onClick={deletePost}
        className="border-1 rounded bg-red-600 w-2/6 text-white py-2">borrar
      </button>
    </div>
  </div>
  );
}