import {useState} from 'react'
import api from '../../api';

export default function PostDetail(props){
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
        <img 
            className="rounded" 
            src={image} 
            alt="" 
        />
        <h3 
            className="text-4xl font-black py-2 text-purple-400"
        >{title}</h3>
        <p
            className="text-gray-500"
        >{content}</p>
        <button
            onClick={addReaction}
            className="flex mt-4 mb-5"
        >
            <svg className="mr-1 fill-current text-red-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon">
                <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
            </svg>
            {reactions}</button>
        {comments &&
        <ul>
            {
                comments.map((comment,key)=>comment==''?null:
                <li className="border-2 my-2 p-1 border-gray-100 rounded flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="crayons-icon">
                        <path className="fill-current text-pink-400" d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z" fill="#08090A"></path>
                        <path className="fill-current text-purple-400" fill-rule="evenodd" clip-rule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
                    </svg>
                    <span className="ml-1 pl-1" key={key}>{comment}</span>
                </li>
                )
            }
        </ul>
        }
        <div className="w-full border-2 border-pink-200 rounded p-2 my-5">
            <label htmlFor="comment"></label>
            <input 
                className="w-10/12 mr-1 border border-pink-200 focus:border-purple-300"
                type="text" 
                name="comment" 
                onChange={handleInput} 
                value={comment}/>
            <button
                className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold p-1 mt-2 md:mt-0"
                onClick={addComment}
            >comentar</button>
        </div>
        </>
    );
}

