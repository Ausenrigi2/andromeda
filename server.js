/* Andromeda — minimal static server */
const path = require("node:path");
const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 8080;
const root = __dirname;

app.use(express.static(root, { index: "index.html", extensions: ["html"] }));

// single-page site: anything unknown lands back on the front page
app.use((req, res) => res.sendFile(path.join(root, "index.html")));

app.listen(PORT, () => {
  console.log("andromeda · serving " + root);
  console.log("http://127.0.0.1:" + PORT + "/");
});
