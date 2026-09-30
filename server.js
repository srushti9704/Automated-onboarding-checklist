const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_task_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }

    console.log("MySQL Connected Successfully");
});

// Get Employees
app.get("/api/employees", (req, res) => {
    db.query(
        "SELECT * FROM employees ORDER BY id DESC",
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json(result);
        }
    );
});

// Add Employee
app.post("/api/employees", (req, res) => {
    const { name, email, department, role } = req.body;

    if (!name || !email || !department) {
        return res.status(400).json({
            error: "Name, Email and Department are required"
        });
    }

    const sql = `
        INSERT INTO employees
        (name, email, department, role)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, department, role],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                message: "Employee added successfully",
                id: result.insertId
            });
        }
    );
});

// Get Tasks
app.get("/api/tasks/:employeeId", (req, res) => {
    db.query(
        "SELECT * FROM tasks WHERE employee_id = ? ORDER BY id DESC",
        [req.params.employeeId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json(result);
        }
    );
});

// Assign Task
app.post("/api/tasks", (req, res) => {
    const { employee_id, task_name, description } = req.body;

    if (!employee_id || !task_name) {
        return res.status(400).json({
            error: "Employee and Task Name are required"
        });
    }

    const sql = `
        INSERT INTO tasks
        (employee_id, task_name, description)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [employee_id, task_name, description],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                message: "Task assigned successfully"
            });
        }
    );
});

// Complete Task
app.put("/api/tasks/:id/complete", (req, res) => {
    db.query(
        `UPDATE tasks
         SET status = 'Completed'
         WHERE id = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: "Task not found"
                });
            }

            res.json({
                message: "Task completed successfully"
            });
        }
    );
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});