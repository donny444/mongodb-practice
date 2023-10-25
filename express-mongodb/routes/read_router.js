const express = require('express');
const router = express.Router();
const { testRead } = require("../controller/read_controller.js")

router.get('/testread', testRead);

module.exports = router;