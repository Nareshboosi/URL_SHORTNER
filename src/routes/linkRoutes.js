const express = require("express");
const router = express.Router();
const { shortenURL, redirectURL } = require("../controllers/linkController.js");

router.post("/shorten", shortenURL);
router.get("/:code", redirectURL);

module.exports = router;
