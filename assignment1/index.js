const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const students = [
  { id: 1,  name: "Aarav Sharma",    branch: "CSE",          semester: 8, cgpa: 9.3 },
  { id: 2,  name: "Ishita Verma",    branch: "IT",           semester: 7, cgpa: 8.9 },
  { id: 3,  name: "Rohan Kulkarni",  branch: "ECE",          semester: 6, cgpa: 8.4 },
  { id: 4,  name: "Meera Iyer",      branch: "CSE",          semester: 8, cgpa: 9.1 },
  { id: 5,  name: "Kunal Deshmukh",  branch: "IT",           semester: 5, cgpa: 7.8 },
  { id: 6,  name: "Ananya Reddy",    branch: "CSE",          semester: 6, cgpa: 8.7 },
  { id: 7,  name: "Vikram Patil",    branch: "ECE",          semester: 7, cgpa: 8.2 },
  { id: 8,  name: "Priyanka Nair",   branch: "AI",           semester: 4, cgpa: 8.8 },
  { id: 9,  name: "Harsh Mehta",     branch: "Data Science", semester: 5, cgpa: 8.0 },
  { id: 10, name: "Neha Gupta",      branch: "CSE",          semester: 6, cgpa: 7.9 },
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student CGPA API",
    routes: [
      "GET /students",
      "GET /students/topper",
      "GET /students/average",
      "GET /students/count",
      "GET /students/:id",
      "GET /students/branch/:branchName",
    ],
  });
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }
  const topper = students.reduce((prev, curr) =>
    curr.cgpa > prev.cgpa ? curr : prev
  );
  res.status(200).json(topper);
});

app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(200).json({ averageCGPA: 0 });
  }
  const total = students.reduce((sum, s) => sum + s.cgpa, 0);
  const averageCGPA = parseFloat((total / students.length).toFixed(2));
  res.status(200).json({ averageCGPA });
});

app.get("/students/count", (req, res) => {
  res.status(200).json({ totalStudents: students.length });
});


app.get("/students/branch/:branchName", (req, res) => {
  const { branchName } = req.params;
  const filtered = students.filter(
    (s) => s.branch.toLowerCase() === branchName.toLowerCase()
  );
  if (filtered.length === 0) {
    return res
      .status(404)
      .json({ message: `No students found in branch: ${branchName}` });
  }
  res.status(200).json(filtered);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID. Must be a number." });
  }
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }
  res.status(200).json(student);
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
