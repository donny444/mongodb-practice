const express = require('express');
const router = express.Router();
const { testCreate } = require("../controller/create_controller.js")

router.post('/testcreate', testCreate);

module.exports = router;