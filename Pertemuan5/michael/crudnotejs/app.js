const express = require("express");
const app = express();

app.get('/', (req, res) => res.send ("respon nodejs berhasil"));

app.listen(4500, () => console.log("port bejalan di 4500"));