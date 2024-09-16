const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

// Event routes
router.post("/", eventController.createEvent);
router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
router.get("/", eventController.filterEventsByLocation);
router.post("/:id/book", eventController.bookEvent);

module.exports = router;
