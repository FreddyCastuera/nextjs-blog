import React from 'react'

export default function Form(props) {
    const { handleInput, handleSubmit, data} = props
    return (
        <div>
            <div className="flex flex-col">
                <label className="font-black text-pink-300" htmlFor="title">title</label>
                <input 
                    className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    type="text"    
                    id="title" 
                    name="title" 
                    placeholder="Type your title..."
                    value={data.title}
                    onChange={handleInput}
                    />
            </div>    
            <br/>
            <div className="flex flex-col">
                <label className="font-black text-pink-300" htmlFor="content">content</label>
                <textarea 
                    className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    name="content" 
                    value={data.content} 
                    id="" 
                    cols="30" 
                    rows="10"
                    placeholder="Inspire yourself and type...." 
                    onChange={handleInput}
                ></textarea>
            </div>
            <br />
            <div className="flex flex-col">
                <label className="font-black text-pink-300" htmlFor="image">image</label>
                <input 
                    className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    type="text"     
                    id="image" 
                    name="image" 
                    placeholder="Add an URL image..."
                    value={data.image}
                    onChange={handleInput}
                />
            </div>
            <button
                className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold px-4 py-1 mb-5"
                onClick={handleSubmit}
            >enviar</button>
        </div>
    )
}
