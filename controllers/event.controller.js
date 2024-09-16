const Event = require("../models/event");

// Create an event
const createEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Filter events by location
const filterEventsByLocation = async (req, res) => {
  try {
    const { location } = req.query;
    const events = await Event.find({ location });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Book an event
const bookEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.booked_users.push(req.body.user_id);
    await event.save();
    res.json({ message: "Booking successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  filterEventsByLocation,
  bookEvent,
};
