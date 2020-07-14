import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("HI");
  res.end("hi");
});

router.get("/error", (req, res) => {
  throw Error("DIE");
});

module.exports = router;
// export router;
