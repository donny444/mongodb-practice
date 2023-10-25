const express = require('express');
const router = express.Router();
const { testDelete } = require("../controller/delete_controller.js")

router.delete('/testdelete', testDelete);

module.exports = router;