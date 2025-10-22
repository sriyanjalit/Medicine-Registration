# Medicine Registration Form – Node.js, Express, MongoDB

This project is a simple **Medicine Registration Form** web application built using:
- HTML (frontend form)
- Node.js with Express (backend server)
- MongoDB with Mongoose (database)

Users can:
- Register a new medicine entry
- View all registered medicines (GET)
- View details of a single medicine (GET by ID)
- Delete a medicine entry (DELETE by ID)

---

## Features

- Medicine registration form with HTML and CSS
- RESTful API with Express for adding, querying, and deleting medicines
- Data persisted in a MongoDB database
- Auto-increment ID generation if the ID is not manually entered
- Separate endpoints for API use and browser form submission

---

## Prerequisites

- Node.js & npm ([download](https://nodejs.org/))
- MongoDB Community Edition ([download](https://www.mongodb.com/try/download/community))

---

## Setup Instructions

1. **Clone the repository:**
    ```
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Start MongoDB** (make sure your `mongod` service is running).

4. **Start the server:**
    ```
    node server.js
    ```

5. **Open the form in your browser:**
    ```
    http://localhost:3000/
    ```

---

## File Structure

├── index.html # Medicine Registration Form (HTML)
├── server.js # Express server with MongoDB integration
├── style.css # Styling for the form (optional)
├── package.json # Dependencies for the Node.js project

---

## API Endpoints

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/medicines`        | Get all medicine entries   |
| GET    | `/medicines/:id`    | Get medicine by ID         |
| POST   | `/medicines`        | Register a new medicine    |
| DELETE | `/medicines/:id`    | Delete medicine by ID      |

- To register a medicine via the **form**, use the form UI at `/`.
- To use the **API**, send requests with Postman or curl.

---

## Example Request (with curl)

# Register a new medicine (JSON)
curl -X POST http://localhost:3000/medicines
-H "Content-Type: application/json"
-d '{"mname":"Paracetamol","date":"2025-11-01","name":"John Doe","phone":"1234567890"}'

---

## License

This project is licensed under the MIT License.
