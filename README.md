# 👤 Person Manager

A full-stack CRUD (Create, Read, Update, Delete) web application for managing people using **Node.js**, **Express.js**, **MongoDB**, and **React**.

---

## ✨ Features

- View a list of all people in the database.
- Add a new person.
- Edit an existing person.
- Delete a person with confirmation.
- Responsive UI with minimal design.
- RESTful API integrated with React frontend.

---

## 🚀 Tech Stack

| Frontend       | Backend        | Database    | Tools           |
|----------------|----------------|-------------|-----------------|
| React (Vite)   | Node.js        | MongoDB     | Express.js, Mongoose |
| Axios          | Express.js     | MongoDB Atlas (or Local) | Nodemon         |

---

## 🏗️ Project Structure

```
person-manager/
├── client/                   # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components (PersonCard, Add/Edit forms)
│   │   ├── App.jsx           # Main component
│   │   └── main.jsx          # ReactDOM entry
│   ├── index.html
│   └── vite.config.js
│
├── server/                   # Backend (Express + MongoDB)
│   ├── models/
│   │   └── Person.js         # Mongoose schema
│   ├── routes/
│   │   └── personRoutes.js   # CRUD API routes
│   ├── server.js             # Express server entry point
│   └── .env                  # Environment variables
│
├── .gitignore
├── README.md
├── package.json              # Root (optional for combined script handling)
└── LICENSE
```

---

## ⚙️ Installation

### Prerequisites

- Node.js & npm
- MongoDB Atlas or Local MongoDB

### Clone the repository

```bash
git clone https://github.com/mohit1106/person-manager.git
cd person-manager
```

### Backend Setup

```bash
cd server
npm install
```

- Create a `.env` file inside `server/`:

```
MONGO_URI=mongodb://localhost:27017/persondb
PORT=5000
```

- Run the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Frontend will be live on [http://localhost:5173](http://localhost:5173)

---

## 🧪 API Endpoints

Base URL: `http://localhost:5000/api/persons`

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/`                | Get all persons          |
| POST   | `/`                | Add new person           |
| PUT    | `/:id`             | Update person by ID      |
| DELETE | `/:id`             | Delete person by ID      |

#### Example `Person` JSON:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## 🐞 Troubleshooting

- Ensure MongoDB is running locally or the Atlas URI is correct.
- Check browser console or terminal logs for CORS or API errors.
- For broken routes or 404s, confirm API endpoint paths match frontend calls.

---

## 🛡️ License

MIT License © 2025 [Mohit Verma](https://github.com/mohit1106)

---

## 🙌 Acknowledgments

- [MongoDB Docs](https://docs.mongodb.com/)
- [Express.js Docs](https://expressjs.com/)
- [Vite.js Docs](https://vitejs.dev/)
- [React Docs](https://reactjs.org/)
