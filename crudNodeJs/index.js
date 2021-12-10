const mysql = require("mysql");
const express = require("express");
const app = express();
const db = require("./config/db");
const User = require("./models/User");

app.use(express.urlencoded({ extended: true }));

let connectMySQL = mysql.createConnection({
  host: "localhost", // host mysql
  user: "root", // user mysql
  password: "", // password mysql
});

connectMySQL.connect((err) => {
  if (err) {
    console.log("Problem with MySQL " + err);
  } else {
    console.log("Connected with Database");
  }
});

app.get("/", (req, res) => {
  res.send("NodeJS response successful");
});

app.post("/crud", async (req, res) => {
  try {
    const { customerid , customername, item, qty, price } = req.body;

    const newUser = new User({
      customerid,
      customername,
      item,
      qty,
      price
    });

    await newUser.save();

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

db.authenticate().then(() => {
  console.log("Database created successfully");
});

app.get("/crud", async (req, res) => {
  try {
    const getAllUser = await User.findAll({});
    res.json(getAllUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/crud/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const getUser = await User.findOne({
      where: { id: id },
    });

    res.json(getUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.delete("/crud/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deleteUser = await User.destroy({
      where: { id: id },
    });

    await deleteUser;
    res.json("Delete successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.put("/crud/:id", async (req, res) => {
  try {
    const { customerid , customername, item, qty, price } = req.body;
    const id = req.params.id;

    const updateUser = await User.update(
      {
        customerid,
        customername,
        item,
        qty,
        price
      },
      { where: { id: id } }
    );

    await updateUser;
    res.json("Updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
