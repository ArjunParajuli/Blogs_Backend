const express =  require("express");
const app = express();
const dbConnect = require("./configs/database.js");

require("dotenv").config();

app.use(express.json());

dbConnect();

const PORT = process.env.PORT || 4000;

const blogRoutes = require("./routes/blogRoutes.js");
app.use("/api/v1", blogRoutes);  // mount 

app.listen(PORT, ()=>{
    console.log("started Server at port: ", process.env.PORT);
})

app.get("/", (req, res)=>[
    res.send("<h1>Home Page</h1>")
])


