// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// verbose serve para configurar o sqlite3 a dar maiores infos, vem de verbalizar
// função quando está dentro de um objeto, o nome é método
// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/views/database.db")


module.exports = db
    // Quando colocado a palavra chave NEW, posso então iniciar um novo objeto, desde que o nome retornado seja o constructor/classe, é possível iniciar.

// Utilizar o objeto de banco de dados para nossas operações
// serialize = diz que irá rodar uma sequência de código (strings, numericos, arrays, booleans, objetos ou funcoes)
// db.serialize(() => {
// // Com comandos SQL, irei realizar os passos abaixo:
// // Criar uma tabela com comandos sql = linhas e colunas para guardar dados
// db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT, 
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
// // Inserir dados na tabela
// const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?, ?, ?, ?, ?, ?, ?);

// `
// const values = [
// "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
// "Colectoria",
// "Lapa, Vila Romana",
// "Nº 352",
// "São Paulo",
// "São Paulo",
// "Resíduos Eletrônicos, Lâmpadas"
// ]

// function afterInsertData(err) {
// if (err) {
//     return console.log(err)
// }
// console.log("Cadastrado com Sucesso")
// console.log(this)


// }
// db.run(query, values, afterInsertData)
// // Callback = Chame essa função de volta, passada como parâmetra e será chamada depois de um certo tempo

// // Consultar os dados da mesma
// //db.all(`SELECT name FROM places`, function(err, rows) {
// if (err) {
// return console.log(err)
// }
// console.log("Aqui estão seus registros: ")
// console.log(rows)
// })

// // Deletar um dado da tabela
//db.run(`DELETE FROM places WHERE id = ?`, [8], function(err) {
//    if (err) {
//        return console.log(err)
//   }
//    console.log("Registrado deletado com sucesso!")

// })