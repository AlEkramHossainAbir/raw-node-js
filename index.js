const http = require("http")
const url = require("url")

const app = {}

app.config = {
    port: 3000,
}

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes)

    server.listen(app.config.port,()=>{
        console.log(`Server is running on http://localhost:${app.config.port}`)
    })
} 

app.createServer()


app.handleReqRes = (req,res)=>{
    const parsedUrl = url.parse(req.url,true)
    console.log(parsedUrl)
    res.end("Hello World")
}