const getJSONString = obj =>{
	return JSON.stringify(obj,null,2)
}
const port = 3000
const http = require('http')
const app = http.createServer()
app.on('request',(req,res)=>{
  res.writeHead(200,{
    'Content-Type':'text/html'
  })
  let response = `<h1>Hola mundo</h1>
									<p>${req.method}</p>
									<p>${req.url}</p>
									<p>${getJSONString(req.headers)}</p>`
  res.end(response)
})
app.listen(port)
console.log(`el servidor esta escuchando en el puerto ${port}`)
