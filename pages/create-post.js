import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import api from '../api'
import Form from '../components/form'


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
            <Form
                handleInput = { handleInput }
                handleSubmit = { handleSubmit }
                data = { data }
            />
        </Layout>
    )
}