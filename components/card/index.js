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