const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(logger);

app.use(express.json());

app.use(express.static("public"));

// app.set("view engine", "pug"); // for pug engine
// app.get("/", logger,(req, res) => {
//   console.log("Hi");
//   res.render("index", { text: "World" });

//   //   res.download("server.js");
//   //   res.status(500).json({ message: "error" });

//   //   res.send("Hi I am Aniket Jain");
// });

// app.get("/", logger,logger,logger,(req, res) => {
//   console.log("Hi");
//   res.render("index", { text: "World" });
// });
// app.get("/", (req, res) => {
//   console.log("Hi");
//   res.render("index", { text: "World" });
// });

const userRouter = require("./routes/user");
// const PostRouter = require("./routes/post")

app.use("/user", userRouter);
// app.use('/post',PostRouter);

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

app.listen(PORT);
