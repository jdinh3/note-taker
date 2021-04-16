const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;
const api = require('./Routes/apiRoutes');
const html = require("./Routes/htmlRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route to the client side / middleware to separate backend and frontend
app.use(express.static("public"));

app.use('/', api);
app.use('/',html);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
