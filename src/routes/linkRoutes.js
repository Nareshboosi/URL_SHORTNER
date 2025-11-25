const express = require("express");
const { createShortLink, redirectToOriginal } = require("../controllers/linkController.js");

const router = express.Router();

router.post("/shorten", createShortLink);
router.get("/:code", redirectToOriginal);

module.exports = router;
