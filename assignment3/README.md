# State Statistics Management API

A REST API built with Express.js that manages statistical data of Indian states using an in-memory JSON array.
This API demonstrates proper REST architecture, correct use of HTTP methods, dynamic route handling, array-based data manipulation, and correct status code usage — without using any database, authentication, or external validation libraries.

---

## Objective

Design and implement a complete REST API to manage statistical records of Indian states.
All operations dynamically modify an in-memory array and follow proper RESTful semantics including full replacement using PUT and partial updates using PATCH.

---

## Implemented Routes

Method	Route	Description
GET	/states	Return complete list of states
GET	/states/:id	Return a single state by ID
GET	/states/highest-gdp	Return the state with the highest GDP
POST	/states	Add a new state with auto-generated ID
PUT	/states/:id	Replace entire state record (except ID)
PUT	/states/:id/budget	Update only the annualBudget value
PUT	/states/:id/population	Update only the population value
PATCH	/states/:id/literacy	Update literacyRate only
PATCH	/states/:id/gdp	Update GDP only
PATCH	/states/:id	Partially update any provided fields
DELETE	/states/:id	Delete a state by ID
DELETE	/states/name/:stateName	Delete a state by name (case-insensitive)
DELETE	/states/low-literacy/:percentage	Delete all states with literacyRate below given percentage

---

## Sample API URLs (Local)

GET http://localhost:5000/states
GET http://localhost:5000/states/3
GET http://localhost:5000/states/highest-gdp
POST http://localhost:5000/states
PUT http://localhost:5000/states/1
PUT http://localhost:5000/states/2/budget
PUT http://localhost:5000/states/3/population
PATCH http://localhost:5000/states/4/literacy
PATCH http://localhost:5000/states/5/gdp
PATCH http://localhost:5000/states/6
DELETE http://localhost:5000/states/7
DELETE http://localhost:5000/states/name/Gujarat
DELETE http://localhost:5000/states/low-literacy/70

---

## Steps to Run Locally

Clone the repository
git clone https://github.com/your-username/state-statistics-api.git
cd state-statistics-api

Install dependencies
npm install

Start the server
npm start

Access the API
Open your browser or Postman and navigate to:
http://localhost:5000

---

## Sample Request & Responses

GET /states
[ { "id": 1, "name": "Andhra Pradesh", "population": 49386799, "literacyRate": 67.02, "annualBudget": 279279, "gdp": 14000000 } ]

GET /states/3
{ "id": 3, "name": "Assam", "population": 31205576, "literacyRate": 72.19, "annualBudget": 122000, "gdp": 4500000 }

GET /states/highest-gdp
{ "id": 7, "name": "Gujarat", "population": 63872399, "literacyRate": 78.03, "annualBudget": 243965, "gdp": 21000000 }

POST /states
{ "name": "Test State", "population": 5000000, "literacyRate": 75.5, "annualBudget": 120000, "gdp": 6000000 }

Response
{ "id": 11, "name": "Test State", "population": 5000000, "literacyRate": 75.5, "annualBudget": 120000, "gdp": 6000000 }

PUT /states/2/budget
{ "annualBudget": 35000 }

PATCH /states/6
{ "annualBudget": 28000 }

DELETE /states/low-literacy/70
{ "deletedCount": 3 }

---

## Postman Documentation

(Add your Postman public documentation link here)

---

## Deployed Link

(Add your Render deployment link here)

---

## Tech Stack

Runtime: Node.js
Framework: Express.js
Middleware: CORS, express.json
Deployment: Render
Data Storage: In-memory JSON array

---

## Key Concepts Demonstrated

* RESTful API design
* Route parameters and dynamic handling
* Difference between PUT (full replace) and PATCH (partial update)
* Aggregation logic using reduce()
* Array mutation using find, filter, splice
* Proper HTTP status codes (200, 201, 204, 404)
* Case-insensitive deletion logic
* No database and fully in-memory operations

---

## Author

Daksh Bajaniya
Built as part of a backend assignment to demonstrate strong fundamentals of Express.js and REST API design.
