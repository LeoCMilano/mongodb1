// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000

// const rotas = {
//     "/": "Curso de Express.js",
//     "/livros": "Entrei na rota de livros",
//     "/autores": "Entrei na rota de autores"
// };

// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () =>{
    console.log("Servidor escutando!");
});