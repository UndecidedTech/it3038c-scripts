const express = require("express");
const fs = require("fs");
const schedule = require("node-schedule");
const multer = require("multer");

const app = express();
const port = 3000;

const upload = multer({
    dest: "./"
});

let post = fs.readFileSync("post.json");
var thread = JSON.parse(post);

console.log(thread)

var refreshPost = schedule.scheduleJob("* * * * *", () => {
    thread = cleanPost(thread);
})

function cleanPost(thread) {
    console.log("New Thread :)")
    thread.image = "";
    thread.title = "";
    thread.content = "";
    thread.replies = [];

    return thread;
}

app.listen(port, () => console.log(`server started on ${port}`))

app.post("/api/upload", upload.single("image"), (req, res) => {
    res.send("Success")
})

