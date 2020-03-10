const express = require("express");
const fs = require("fs");
const schedule = require("node-schedule");

const app = express();
const port = 3000;


let post = fs.readFileSync("post.json");
var thread = JSON.parse(post);

console.log(thread)

var refreshPost = schedule.scheduleJob("* * * * *", () => {
    thread = cleanPost(thread);
})

function cleanPost(thread) {
    thread.image = "";
    thread.title = "";
    thread.content = "";
    thread.replies = [];

    return thread;
}

app.listen(port, () => console.log(`server started on ${port}`))

app.get("/", (req, res) => {
    if(thread.image === "") {
    res.sendFile("newThread.html")
    } else {
        res.sendFile()
    }
    
})

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/" + "style.css")
})
