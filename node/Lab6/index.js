const os = require("os");
const express = require("express");
const ip = require("ip");
const app = express();
const port = 3000;

function returnServerInfo() {
    let uptime = os.uptime()

    let uptimeDays = Math.floor(uptime / 86400);
    uptime = uptime - (uptimeDays * 86400);

    let uptimeHours = Math.floor(uptime / 3600);
    uptime = uptime - (uptimeHours * 3600);

    let uptimeMinutes = Math.floor(uptime / 60);
    uptime = uptime - (uptimeMinutes * 60);

    let uptimeSeconds = uptime;

    uptimeReturn = {
        "Days": uptimeDays,
        "Hours": uptimeHours,
        "Minutes": uptimeMinutes,
        "Seconds": uptimeSeconds
    }

    data = {
        "Hostname": os.hostname(),
        "IpAddress": ip.address(),
        "Cpus": os.cpus().length,
        "Uptime": uptimeReturn,
        "TotalMem": `${os.totalmem() / 1000000} mbs`,
        "FreeMem": `${os.freemem() / 1000000} mbs`
    }

    return `
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="theme.css">
        </head>
        <div class="container mt-5">
            <div class="row pl-4 pt-3">
                <div class="col">Hostname: ${data.Hostname}</div>
            </div>
            <hr/>
            <div class="row pl-4 pt-3">
                <div class="col data">Ip Address: ${data.IpAddress}</div>
            </div>
            <hr/>
            <div class="row pl-4 pt-3">
                <div class="col">Number of Cpus: ${data.Cpus}</div>
            </div>
            <hr/>
            <div class="row pl-4 pt-3">
                <div class="col">Uptime: ${JSON.stringify(data.Uptime)}</div>
            </div>
            <hr/>
            <div class="row pl-4 pt-3">
                <div class="col">Total memory: ${data.TotalMem}</div>
            </div>
            <hr/>
            <div class="row pl-4 pt-3 pb-3">
                <div class="col">Free memory: ${data.FreeMem}</div>
                <button class="btn btn-info mr-5" onclick="location.reload()">Refresh Data</button>
            </div>
        </div>
        </html>
    `
}

app.listen(port, () => console.log(`server started on ${port}`));
//serve data and HTML
app.get("/", (req, res) => {
    res.send(returnServerInfo());
})

//serve CSS
app.get("/theme.css", (req, res) => {
    res.sendFile(__dirname + "/" + "theme.css")
})