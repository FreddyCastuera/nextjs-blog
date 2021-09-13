import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import api from '../api'


export default function CreatePost() {
    const [data,setData]=useState({comments:[""],reactions:0,user:"jorge"})

    function handleInput(event){
        const {name,value} = event.target
        setData({...data,[name]:value})
    }
    async function handleSubmit(){
        const key  = await api.postData(data);
        const id = key.name
        Router.push(`/posts/${id}`)


    }

    return (
        <Layout>
            <div className="flex flex-col">
                <label 
                    htmlFor="title"
                    className="text-purple-300"
                    >title</label>
                <input 
                    className="w-full border-2 border-pink-200 rounded"
                    type="text"    
                    id="title" 
                    name="title" 
                    value={data.title}
                    onChange={handleInput}
                    />
            </div>    
            <br/>
            <div className="flex flex-col">
                <label 
                    htmlFor="content"
                    className="text-purple-300"
                    >content</label>
                <textarea 
                    className="w-full border-2 border-pink-200 rounded"
                    name="content" 
                    value={data.content} 
                    id="" 
                    cols="30" 
                    rows="10" 
                    onChange={handleInput}
                ></textarea>
            </div>
            <br />
            <div className="flex flex-col mb-5">
                <label
                    htmlFor="image"
                    className="text-purple-300"
                    >image</label>
                <input 
                    className="w-full border-2 border-pink-200 rounded"
                    type="text"     
                    id="image" 
                    name="image" 
                    value={data.image}
                    onChange={handleInput}
                />
            </div>
            <button
                className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold mb-5 p-1 mt- md:mt-0 w-60"
                onClick={handleSubmit}
            >enviar</button>
            
        </Layout>
    )
}