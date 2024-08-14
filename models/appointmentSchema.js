const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
