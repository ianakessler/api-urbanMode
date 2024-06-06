import { readFileData } from "../utils/fileHandler.js";

function getProdutos(req, res){
    try{
        const produtos = readFileData("data/produtos.json");
        res.send({data: produtos}).status(200);
    } catch(error){
        res.send("Erro interno do servidor").status(500);
    }
}

function getProdutoPorId(req, res){
    const id = req.params.id;
    try{
        const produtos = readFileData("data/produtos.json");
        const ret = produtos.find(p=> p.id == id);
        console.log(ret);
        if(ret !== null){
            res.send({data: ret}).status(200);
        }
    } catch(error){
        console.log(error);
        res.send("Erro interno do servidor").status(500);
    }
}

export {
    getProdutos,
    getProdutoPorId
}