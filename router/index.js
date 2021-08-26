const router = require("express").Router();

router.get("/home", (req, res) => {
  return res.send("From back!");
});
router.use("/", require("./auth"));

module.exports = router;
