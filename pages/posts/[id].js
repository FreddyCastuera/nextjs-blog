import Layout from '../../components/layout'
import {useState,useEffect} from 'react'
import api from '../../api'

function Card(props){
    const {key} = props.post
    const [comment,setComment] = useState("");
    const [post,setPost] = useState(props.post)
    const {image,user,title,content,reactions,comments}=post

    function handleInput(event){
        const {value} = event.target
        setComment(value)
    }
    async function addComment(){
        await api.updatePost(key,{comments:[...comments,comment]})
        const updatedPost = await api.getPost(key)
        setPost(updatedPost)
    }
    async function addReaction(){
        await api.updatePost(key,{reactions:reactions+1})
        const updatedPost = await api.getPost(key)
        setPost(updatedPost)
    }
    
    return (
        <>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{content}</p>
        <button
            onClick={addReaction}
        >{reactions}</button>
        {comments &&
        <ul>
            {
                comments.map((comment,key)=>key==0?null:<li key={key}>{comment}</li>)
            }
        </ul>
        }
        <label htmlFor="comment"></label>
        <input 
            type="text" 
            name="comment" 
            onChange={handleInput} 
            value={comment}/>
        <button
            onClick={addComment}
        >comentar</button>
        </>
    );
}

export default function Post({ postData }) {
    return(
        <Layout>
            <Card post={postData}/>
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

