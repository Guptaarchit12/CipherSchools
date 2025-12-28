const mongoose = require("mongoose");
const Assignment = require("./models/Assignment");
require("dotenv").config();

const assignments = [
  {
    title: "Basic SELECT Query",
    description: "Learn to retrieve all records from a table",
    difficulty: "Easy",
    question: "Write a SQL query to select all students and their courses from the students table.",
    sampleData: "Table: students\nColumns: id, name, course\nSample rows: (1, 'Archit', 'Data Science'), (2, 'Rahul', 'Web Development')",
    expectedOutput: "All columns: id, name, course"
  },
  {
    title: "Filter with WHERE Clause",
    description: "Filter records based on conditions",
    difficulty: "Easy",
    question: "Write a SQL query to find all students enrolled in 'Data Science' course.",
    sampleData: "Table: students\nColumns: id, name, course",
    expectedOutput: "Students where course = 'Data Science'"
  },
  {
    title: "Count Students by Course",
    description: "Use aggregate functions",
    difficulty: "Medium",
    question: "Write a SQL query to count how many students are in each course.",
    sampleData: "Table: students\nColumns: id, name, course",
    expectedOutput: "course, count grouped by course"
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Connected to MongoDB");
  await Assignment.deleteMany({});
  await Assignment.insertMany(assignments);
  console.log("Sample assignments inserted!");
  process.exit();
});