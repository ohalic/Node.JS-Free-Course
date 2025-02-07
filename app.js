import express from 'express'; // เรียกใช้ express
import chalk from 'chalk'; // เรียกใช้ chalk
import debug from 'debug';
import morgan from 'morgan';


const log = debug('app'); // สร้างตัวแปร log สำหรับ debug
const app = express(); // สร้างตัวแปร app เรียกใช้ express
const port = 3000; // กำหนด port 3000

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('Hello bornToDev UIIAIUIIIAI MEOW'); // ส่งข้อความกลับไป
});

app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`); // ใช้ chalk.green อย่างถูกต้อง
});
