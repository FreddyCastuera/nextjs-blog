import React from 'react'

export default function form(props) {
    const { handleInput, handleSubmit, data} = props
    return (
        <div>
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
        </div>
    )
}
