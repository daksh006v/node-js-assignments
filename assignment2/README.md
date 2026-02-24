# E-Commerce Product API

A REST API built with **Express.js** that manages product listings for an e-commerce platform using an in-memory JSON array.

## Objective

Build a backend API to manage product data with proper RESTful routes (GET, POST, PUT), correct status codes, filtering, and update operations — deployed on Render.

---

## Implemented Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /products | Returns all products |
| GET | /products/:id | Returns product by ID |
| GET | /products/category/:categoryName | Returns products filtered by category (case-insensitive) |
| POST | /products | Adds a new product with auto-generated ID |
| PUT | /products/:id | Replaces entire product (except ID) |
| PUT | /products/:id/stock | Updates only the stock value |
| PUT | /products/:id/price | Updates only the price value |

---

## Sample API URLs (Local)

GET http://localhost:5000/products  
GET http://localhost:5000/products/3  
GET http://localhost:5000/products/category/Electronics  
POST http://localhost:5000/products  
PUT http://localhost:5000/products/1  
PUT http://localhost:5000/products/2/stock  
PUT http://localhost:5000/products/3/price  

---

## Steps to Run Locally

1. **Clone the repository**
   git clone https://github.com/your-username/ecommerce-product-api.git  
   cd ecommerce-product-api  

2. **Install dependencies**
   npm install  

3. **Start the server**
   npm start  

4. **Access the API**
   Open your browser or Postman and navigate to:  
   http://localhost:5000

---

## Sample Request & Responses

### GET /products
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  }
]

### GET /products/3
{
  "id": 3,
  "name": "Laptop Stand",
  "category": "Accessories",
  "price": 999,
  "stock": 30,
  "rating": 4.2
}

### GET /products/category/Electronics
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  }
]

### POST /products
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}

**Response**
{
  "id": 6,
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}

### PUT /products/2/stock
{
  "stock": 60
}

### PUT /products/3/price
{
  "price": 1299
}

---

## Postman Documentation:

https://documenter.getpostman.com/view/50840953/2sBXcGDepg

## Deployed Link

(https://node-js-assignments.onrender.com)

---

## Tech Stack

- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Middleware**: CORS, express.json  
- **Deployment**: Render  
- **Data Storage**: In-memory JSON array  
