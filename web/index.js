const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening at the port 3000");
});
