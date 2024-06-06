import rotaProdutos from "../routes/produtosRouter.js";



const router = (app) =>{
    app.route("/").get((req, res)=>{
        res.status(200).send("200 ok")
    })

    app.use(rotaProdutos)
}

export default router;