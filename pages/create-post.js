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
        <Layout home>
            <div className="flex flex-col">
                <label htmlFor="title">title</label>
                <input 
                    className="border-2 border-black"
                    type="text"    
                    id="title" 
                    name="title" 
                    value={data.title}
                    onChange={handleInput}
                    />
            </div>    
            <br/>
            <div className="flex flex-col">
                <label htmlFor="content">content</label>
                <textarea 
                    className="border-2 border-black"
                    name="content" 
                    value={data.content} 
                    id="" 
                    cols="30" 
                    rows="10" 
                    onChange={handleInput}
                ></textarea>
            </div>
            <br />
            <div className="flex flex-col">
                <label htmlFor="image">image</label>
                <input 
                    className="border-2 border-black"
                    type="text"     
                    id="image" 
                    name="image" 
                    value={data.image}
                    onChange={handleInput}
                />
            </div>
            <button
                className="border-2 border-black w-60 mt-5"
                onClick={handleSubmit}
            >enviar</button>
            
        </Layout>
    )
}