const express = require('express');
const router = express.Router();
const { testUpdate } = require("../controller/update_controller.js")

router.put('/testupdate', testUpdate);

module.exports = router;