const os = require("os")
const express = require("express");
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

    return {
        "Hostname": os.hostname(),
        "Ip Address": os.networkInterfaces().en0[1].address,
        "Number of Cpus": os.cpus().length,
        "uptime": uptimeReturn,
        "Total Memory": `${os.totalmem() / 1000000} mbs`,
        "Free Mem": `${os.freemem() / 1000000} mbs`
    }
}

app.listen(port, () => console.log(`server started on ${port}`));

app.get("/", (req, res) => {
    res.send(returnServerInfo())
    
})

