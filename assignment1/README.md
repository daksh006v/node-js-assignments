# Student CGPA API

A REST API built with **Express.js** that manages student academic performance records using an in-memory JSON array.

## Objective

Build a backend API to serve student CGPA data with proper RESTful GET routes, status codes, filtering, and aggregation — deployed on Render.

---

## Implemented Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/students` | Returns all student records |
| GET | `/students/topper` | Returns student with highest CGPA |
| GET | `/students/average` | Returns average CGPA of all students |
| GET | `/students/count` | Returns total number of students |
| GET | `/students/:id` | Returns student by ID |
| GET | `/students/branch/:branchName` | Returns students filtered by branch (case-insensitive) |

---

## Sample API URLs (Local)

```
GET http://localhost:3000/students
GET http://localhost:3000/students/topper
GET http://localhost:3000/students/average
GET http://localhost:3000/students/count
GET http://localhost:3000/students/3
GET http://localhost:3000/students/branch/CSE
```

---

## Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/student-cgpa-api.git
   cd student-cgpa-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the API**
   Open your browser or Postman and navigate to:
   ```
   http://localhost:3000
   ```

---

## Sample Responses

### GET /students/topper
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

### GET /students/average
```json
{
  "averageCGPA": 8.61
}
```

### GET /students/count
```json
{
  "totalStudents": 10
}
```

### GET /students/3
```json
{
  "id": 3,
  "name": "Rohan Kulkarni",
  "branch": "ECE",
  "semester": 6,
  "cgpa": 8.4
}
```

### GET /students/branch/CSE
```json
[
  { "id": 1, "name": "Aarav Sharma", "branch": "CSE", "semester": 8, "cgpa": 9.3 },
  { "id": 4, "name": "Meera Iyer",   "branch": "CSE", "semester": 8, "cgpa": 9.1 },
  ...
]
```

---

## Deployed Link

 **[[https://your-app.onrender.com](https://your-app.onrender.com)](https://node-js-assignment1.onrender.com)**

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, express.json
- **Deployment**: Render
