const router = require("express").Router();

const fs = require("fs");
router.get("/api/notes", (req, res) => {
  //read db.json and return it through response from server res.json()
  //data is retrieved as a string
  let data = fs.readFileSync("./db/db.json", "utf8");
  data = JSON.parse(data);
  
  //we need to send json back though
  //res.json() only sends back a json but the JSON.parse is actually parsing the data string into a json object
  return res.json(data);
});

router.post("/api/notes", (req, res) => {
  let newNote = req.body;
  let data = fs.readFileSync("./db/db.json", "utf8");
  data = JSON.parse(data);

  if (!data) {
    data = [];
  }
  data.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  return res.json(newNote);
});

//delete
//req.params.id

module.exports = router;
