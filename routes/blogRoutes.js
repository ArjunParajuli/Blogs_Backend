const express = require("express");
const router = express.Router();

// import controller
const createComment  = require("../controllers/commentCOntroller")

// create mapping
router.post('/comments/create', createComment);


module.exports = router;