# State Statistics Management API

A complete REST API built with **Express.js** to manage statistical data of Indian states using an in-memory JSON array.
This project demonstrates proper REST architecture, dynamic routing, array-based data manipulation, and correct usage of HTTP methods and status codes — without using any database, authentication, or external validation libraries.

---

## Objective

Design and implement a full RESTful backend to manage statistical records of Indian states.
All operations dynamically modify an in-memory array and strictly follow REST principles including full replacement using **PUT** and partial updates using **PATCH**.

---

## Base URL

Production Deployment:
https://node-js-assignments-3.onrender.com

---

## Postman Documentation

Complete API Documentation:
https://documenter.getpostman.com/view/50840953/2sBXcHhdoV

---

## Tech Stack

| Category     | Technology           |
| ------------ | -------------------- |
| Runtime      | Node.js              |
| Framework    | Express.js           |
| Middleware   | CORS, express.json() |
| Deployment   | Render               |
| Data Storage | In-memory JSON array |

---

## Data Structure

Each state follows this schema:

```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

---

# API Routes Documentation

## GET Routes

| Method | Endpoint            | Description                        | Status Codes |
| ------ | ------------------- | ---------------------------------- | ------------ |
| GET    | /states             | Returns all states                 | 200          |
| GET    | /states/:id         | Returns a single state by ID       | 200, 404     |
| GET    | /states/highest-gdp | Returns the state with highest GDP | 200          |

### Example

GET https://node-js-assignments-3.onrender.com/states/3

---

## POST Route

| Method | Endpoint | Description                             | Status Codes |
| ------ | -------- | --------------------------------------- | ------------ |
| POST   | /states  | Adds a new state with auto-generated ID | 201          |

### Sample Request Body

```json
{
  "name": "Test State",
  "population": 5000000,
  "literacyRate": 75.5,
  "annualBudget": 120000,
  "gdp": 6000000
}
```

---

## PUT Routes (Full Replacement)

| Method | Endpoint               | Description                      | Status Codes |
| ------ | ---------------------- | -------------------------------- | ------------ |
| PUT    | /states/:id            | Replace entire state (except ID) | 200, 404     |
| PUT    | /states/:id/budget     | Update only annualBudget         | 200, 404     |
| PUT    | /states/:id/population | Update only population           | 200, 404     |

---

## PATCH Routes (Partial Updates)

| Method | Endpoint             | Description                          | Status Codes |
| ------ | -------------------- | ------------------------------------ | ------------ |
| PATCH  | /states/:id/literacy | Update literacyRate only             | 200, 404     |
| PATCH  | /states/:id/gdp      | Update GDP only                      | 200, 404     |
| PATCH  | /states/:id          | Update any provided fields partially | 200, 404     |

---

## DELETE Routes

| Method | Endpoint                         | Description                                       | Status Codes |
| ------ | -------------------------------- | ------------------------------------------------- | ------------ |
| DELETE | /states/:id                      | Delete state by ID                                | 204, 404     |
| DELETE | /states/name/:stateName          | Delete state by name (case-insensitive)           | 204, 404     |
| DELETE | /states/low-literacy/:percentage | Delete states with literacyRate below given value | 200          |

### Sample Response (Low Literacy Deletion)

```json
{
  "deletedCount": 2
}
```

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/state-statistics-api.git
cd state-statistics-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

Server runs at:

```bash
https://node-js-assignments-3.onrender.com
```

---

## Key REST Concepts Demonstrated

* Resource-based routing
* Dynamic route parameters
* Proper HTTP status code usage (200, 201, 204, 404)
* Difference between PUT (full replacement) and PATCH (partial update)
* Aggregation logic using reduce()
* Array mutation using find, filter, and splice
* Case-insensitive resource deletion
* Fully in-memory dynamic data handling (no database)

---

## Testing

All endpoints are fully tested using Postman.
Use the published Postman collection for ready-to-run requests:

https://documenter.getpostman.com/view/50840953/2sBXcHhdoV

---

## Deployment

The API is deployed on Render and publicly accessible:

https://node-js-assignments-3.onrender.com

---

## Author

Daksh Bajaniya
Built as part of a backend REST API assignment to demonstrate strong fundamentals of Express.js, REST architecture, and server-side data manipulation.
