const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router/route");

/** import connection file */
const DB = require("./database/conn");

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
dotenv.config();

/** appliation port */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", router); /** apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have valid connection */
DB.connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
