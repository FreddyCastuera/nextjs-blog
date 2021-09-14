import Link from 'next/link'
import { useState,useEffect } from 'react'

export default function Card(props){
    const {image,user,title,content,reactions,comments,key}=props.post
    const {deletePost} = props
    return (
    
    <div className=" w-full md:w-3/12  p-5 mx-5 shadow-xl rounded-xl flex flex-col justify-around"> 
      <div>
        <div className="">
          <img className="max-h-72 w-full object-cover" src={image} alt=""/>
        </div>
        <div className="flex justify-between items-center px-3 pt-3">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div>
          <p className="text-gray-300 font-semibold pl-3 mb-3" >{ user }</p>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <Link href={`/posts/${key}`}>
          <a 
          className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold p-1 mt-2 md:mt-0 px-3"
          href="">ver</a>
        </Link>
        <button 
          data-key={key}  
          onClick={deletePost}
          className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold p-1 mt-2 md:mt-0 px-3">borrar
        </button>
      </div>
    </div>
    );
  }