import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



let array = [];


app.get("/", (req,res) => {
    res.render("index.ejs", {inputArray: array});
});



app.post("/addTask", (req, res) => {
    let newItem = req.body["newTask"];
    array.push(newItem);
    res.redirect("/");
});

app.post("/removeTask", (req, res) => {
    let delTask = req.body["newTask"];
    array.pop("delTask");
    res.redirect("/");
});











app.listen(port, () => {
    console.log("Listening on port " + port)
});