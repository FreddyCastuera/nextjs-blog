import Layout from '../../components/layout'
import {useState,useEffect} from 'react'
import api from '../../api'
// component
import PostDetail from '../../components/postdetail';

export default function Post({ postData }) {
    return(
        <Layout>
            < PostDetail post={postData} />
        </Layout>
    );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
    const data = await fetch('https://blog-7be92-default-rtdb.firebaseio.com/posts.json')
    const posts = await data.json();
    console.log(posts);
    const paths =  Object.keys(posts).map(key=>{
        return {
            params:{
                id:key
            }
        }
    })  
    return{
        paths,
        fallback:false
    }
}
export async function getStaticProps({ params }) {
    const data = await fetch(`https://blog-7be92-default-rtdb.firebaseio.com/posts/${params.id}.json`)
    const postData = await data.json();
    postData.key=params.id

    return {
        props: {
            postData
            }
    }
}

