const BASE_URL = 'https://blog-7be92-default-rtdb.firebaseio.com/posts'
export default{
    async getAllPost(){
        const data = await fetch(`${BASE_URL}/.json`)
        const response = await data.json();
        const posts = response ? Object.keys(response).map(key=>({...response[key],key})):[]
        return posts;
    },
    async getPost(id){
        const response = await fetch(`${BASE_URL}/${id}.json`)
        const post = await response.json();
        return post
    },
    async deletePost(id){
        const init = {method:"DELETE"};
        fetch(`${BASE_URL}/${id}.json`,init)
    },    
    async updatePost(key,updatedProperty){
        const init = {method:"PATCH",body:JSON.stringify(updatedProperty)}
        await fetch(`${BASE_URL}/${key}.json`,init)
    }
}