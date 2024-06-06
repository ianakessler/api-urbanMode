import Express from "express";
import router from "./middleware/router.js";
import cors from "cors"

const app = Express();
const PORT = 1234 || process.env.PORT;

app.use(cors({origin: "*"}))
router(app);

app.listen(PORT, ()=>{
    console.log("Escutando porta:", PORT)
})