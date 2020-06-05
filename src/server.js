const express = require("express")
const server = express()

// configurar pasta públuca
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da aplicação
//página inicial
// req = requisição
// res = resposta 
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-result", (req, res) => {
    return res.render("search-result.html")
})

//ligar o servidor
server.listen(3000)