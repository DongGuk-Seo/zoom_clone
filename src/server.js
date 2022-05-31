import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // application call(js) - Front End
app.get("/", (req, res) => res.render("home")); // rendering templates
app.get("/*", (req, res) => res.redirect("/")); // redirect to home for blocking searching other folders

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // http server
const wss = new WebSocket.Server({ server }); // Web Socket server , {server} is not necessary(For running http and wss simultaneously)

server.listen(3000, handleListen);