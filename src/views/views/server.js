const express = require("express")
const server = express()

// Precisamos inicialmente configurar caminhos no meu server
// Página Inicial
// req: Requisição
// res: Resposta - Notemos na arrow funtion abaixo

server.get("/", (req, res) => {
    res.sendFile(__dirname + "src/views/index.html")
})

//Verbos = get = pedir



// Ligar o Servidor
server.listen(3000)
