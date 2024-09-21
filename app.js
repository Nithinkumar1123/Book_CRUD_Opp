const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/booksRoutes.js");
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoute);



app.use(express.urlencoded({extended: true}));

app.listen(1000,() =>{
    console.log("Server is running  in http://127.0.0.1:1000");
})