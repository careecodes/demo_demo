const http = require("http");
const cowsay = require("cowsay");
const dns = require("dns");
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  });

server.listen(port, hostname, () => {
    rl.question("Domain Name: ", function (url) {
        rl.close();
        dns.lookup(url, function (error, address) {
            if (error) {
                console.log(error.message);
                return;
            }
            console.log("IP Address: ", address);
        })
    });
});


// Read from a file