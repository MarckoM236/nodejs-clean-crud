# Node.js Clean CRUD API

A lightweight CRUD API built with Node.js using a clean MVC architecture with service and repository layers. This project does not rely on any framework and uses mysql2 for database interaction.

---

## 🚀 Features

- MVC architecture (Controller → Service → Repository)
- Service & Repository pattern
- No frameworks (pure Node.js)
- MySQL integration using mysql2
- Basic request validation
- Clean and scalable structure

---

## 📁 Project Structure
```txt
project-root/
│
├── app/
│ ├── controllers/
│ ├── services/
│ ├── repositories/
│ └── requests/
│
├── system/
│ ├── router.js
│ └── request.js
│
├── helpers/
│ └── response.js
│
├── config/
│ └── db.js
│
├── main.js
└── package.json
```


---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nodejs-clean-crud.git
cd nodejs-clean-crud
```
2. Install dependencies:

```bash
npm install
```

3. Configure your database:
```txt
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
});
```

4. Run the server:
```bash
node main.js
```

___

## ⚙️ Notes
- No ORM is used; raw SQL queries are executed via mysql2
- Input validation is basic and can be extended
- Error handling is managed at the controller level

