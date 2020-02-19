const os = require("os");
const express = require("express");
const ip = require("ip");
const app = express();
const port = 3000;


console.log(os.uptime())



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
        <p>Hostname: ${data.hostname}</p>
        <p>Ip Address: ${data.IpAddress}</p>
        <p>Number of Cpus: ${data.Cpus}</p>
        <p>Uptime: ${JSON.stringify(data.Uptime)}</p>
        <p>Total memory: ${data.TotalMem}</p>
        <p>Free memory: ${data.FreeMem}</p>
        </html>
    `
}

app.listen(port, () => console.log(`server started on ${port}`));

app.get("/", (req, res) => {
    res.send(returnServerInfo());
})

