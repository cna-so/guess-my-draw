import express from "express"
import logger from "morgan"
import {join} from "path"
import {Server as SocketIoServer} from "socket.io"
import http from "http"
const PORT = 4000

const app = express()

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));



app.get("/", (req, res) => res.render("home"))
const server = http.createServer(app)
const io = new SocketIoServer(server, {})
io.on("connection" , (socket) => console.log(socket.id))

server.listen(3000, () => {
    console.log(` server start on port ${PORT}`)
})


