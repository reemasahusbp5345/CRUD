const express = require("express");

const {getWebinar, addWebinar, deleteWebinar, editWebinar} = require("../controllers/webinar");

const router = express.Router();

router.get("/webinar", getWebinar);

router.post("/webinar",  addWebinar);
router.delete("/:id", deleteWebinar);
router.post("/update/:id",editWebinar)
module.exports = router;