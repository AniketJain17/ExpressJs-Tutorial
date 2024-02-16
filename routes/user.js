const express = require("express");
const router = express.Router();

// we can also able to define middleware in every route for  authentication or any other purpose
// router.use(logger);

router.get("/", (req, res) => {
  // req.query.name
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("user/new");
});

// router.post("/", (req, res) => {
//   console.log(req.body.firstName);
//   res.send(" Hii ");
// });
router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`user/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("user/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User By id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User By id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete User By id ${req.params.id}`);
  });

const users = [{ name: "Aniket Jain" }, { name: "Sambahv Jain" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
// router.get('/:id',(req,res)=> {
//     res.send(`Get User By id ${req.params.id}`)
// })

// router.put('/:id',(req,res)=> {
//     res.send(`Update User By id ${req.params.id}`)
// })

// router.delete('/:id',(req,res)=> {
//     res.send(`delete User By id ${req.params.id}`)
// })

// function logger(req,res,next){
//     console.log(req.originalUrl)
//     next()
// }

module.exports = router;
