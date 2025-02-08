import express from 'express'; // เรียกใช้ express
import chalk from 'chalk'; // เรียกใช้ chalk
import createDebug from 'debug';
const debug = createDebug('app');
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const productRouter = express.Router();

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const app = express(); // สร้างตัวแปร app เรียกใช้ express
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(_dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine","ejs")

productRouter.route("/").get((req,res) =>{
    res.send("Hello World Im Product");
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello World Im Product 1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {
    res.render('index',{username: 'Eieiza555', customers: ["Natnicha","Nattanan","Nattapat"]}); // ส่งข้อความกลับไป
});

app.listen(PORT, () => {
    debug(`Listening on port ${chalk.green(PORT)}`); // ใช้ chalk.green อย่างถูกต้อง
});
