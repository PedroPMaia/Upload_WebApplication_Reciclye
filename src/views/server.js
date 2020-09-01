const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

//configurar pasta pública
//Comando abaixo é para configuração de rota, ou seja, irei enxergar o que estiver dentro do diretório publica (style, scrips, styles e etc)
server.use(express.static("public"))


//habilitar o uso do re.body na nossa aplicação.
server.use(express.urlencoded({ extended: true }))

// Utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views/views", {
    express: server,
    noCache: true //noCache propriamente dito, é para que o HTML modificado não seja carregado uma versão antiga e sem a devida modificação realizada naquele momento. Valor true para isso ocorrer e nao armazenar, e false para usar cache.
})


// Precisamos inicialmente configurar caminhos no meu server
// Página Inicial
// req: Requisição
// res: Resposta - Notemos na arrow funtion abaixo

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})

server.get("/create-point", (req, res) => {


    // req.query: Query strings da nossa URL
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: Corpo do nosso formulário
    // console.log(req.body)

    //Inserir dados no banco de dados

    const query = `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?, ?, ?, ?, ?, ?, ?);

 `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,

    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com Sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })


    }
    db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }

    // pegar os dados do banco de dados
    // // Consultar os dados da mesma
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log(rows)

        const total = rows.length
            // length é uma propridade adicionada ao array e irá contar os elementos do array


        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })

})


//Verbos = get = pedir
// Ligar o Servidor
server.listen(3000)