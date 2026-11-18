const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// Add Student
router.post("/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});


// Get Students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});


// Delete Student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student Deleted");
});

module.exports = router;