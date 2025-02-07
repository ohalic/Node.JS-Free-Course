import express from 'express'; // เรียกใช้ express
import chalk from 'chalk'; // เรียกใช้ chalk
import createDebug from 'debug';
const debug = createDebug('app');
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const app = express(); // สร้างตัวแปร app เรียกใช้ express
const port = 3000; // กำหนด port 3000

app.use(morgan('combined'));
app.use(express.static(path.join(_dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('Hello bornToDev UIIAIUIIIAI MEOW YuMMMMy'); // ส่งข้อความกลับไป
});

app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`); // ใช้ chalk.green อย่างถูกต้อง
});
