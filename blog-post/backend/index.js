const http = require("http");
const app = require("./app.js");
const server = http.createServer(app);

const port = 5174;

server.listen(port, () => console.log(`Server is running on port ${port}`));