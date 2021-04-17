const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  //read db.json and return it through response from server res.json()
  //data is retrieved as a string
  let data = fs.readFileSync("db/db.json");

  let dataParse = JSON.parse(data);

  res.json(dataParse);
});

router.post("/api/notes", (req, res) => {
  let newNote = req.body;

  let data = JSON.parse(fs.readFileSync("db/db.json"));

  data.push(newNote);

  fs.writeFileSync("db/db.json", JSON.stringify(data));
  res.sendStatus(200);
});

module.exports = router;
