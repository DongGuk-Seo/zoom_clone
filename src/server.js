import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // application call(js) - Front End
app.get("/", (req, res) => res.render("home")); // rendering templates
app.get("/*", (req, res) => res.redirect("/")); // redirect to home for blocking searching folders

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000);