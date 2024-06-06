import { Router } from "express";
import { getProdutoPorId, getProdutos } from "../Controller/produtosController.js";

const rotaProdutos = Router();

rotaProdutos.get("/produtos", getProdutos);
rotaProdutos.get("/produtos/:id", getProdutoPorId);

export default rotaProdutos;

