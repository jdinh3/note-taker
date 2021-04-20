const router = require("express").Router();
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
const fs = require("fs");
const uuid = require("uuid")
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
  newNote.id = uuid.v4();
  data.push(newNote);

  fs.writeFileSync("db/db.json", JSON.stringify(data));
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  connection.query(
    "DELETE FROM project WHERE id=" + req.params.id,
    function (err, results) {
      if (err) throw err;
    }
  );
});

module.exports = router;
