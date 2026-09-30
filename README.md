Employee Task Management System
_______________________________________________________________________________________________________________________________________
:-Project Title

Employee Task Management System

The Employee Task Management System is a web-based application developed to manage employee information and their assigned tasks in an organized and efficient way.

__________________________________________________________________________________________________________________________________________

2. Project Description

The Employee Task Management System is designed to help organizations manage employee details and tasks digitally. The system allows the user to add employee information, view the employee list, assign tasks, and manage the completion status of tasks.

The main purpose of this project is to reduce manual work and provide a simple and user-friendly system for managing employees and their tasks. The application uses a web-based interface connected to a MySQL database for storing and retrieving information.

________________________________________________________________________________________________________________________________________

3. Technologies / Tech Stack Used

The following technologies and tools are used to develop this project:

Frontend

- HTML – Used to create the structure of web pages.
- CSS – Used for designing and styling the user interface.
- JavaScript – Used to add functionality and handle user interactions.

Backend

- Node.js – Used to run the server-side application.
- Express.js – Used to create the web server and handle routes and requests.

Database

- MySQL – Used to store employee and task information.
- phpMyAdmin – Used to create and manage the MySQL database and tables.

Development Tools

- Visual Studio Code (VS Code) – Used for writing and managing the project code.
- XAMPP – Used to run the required local services, including MySQL.

---

4. Database Details

The project uses MySQL as the database.

Database Name

employee_task_db

Tables Used

The database contains the following main tables:

Employees Table

The "employees" table stores information related to employees.

Example columns:

- "id" – Unique ID of the employee.
- "name" – Name of the employee.
- "email" – Email address of the employee.
- "department" – Department of the employee.

Tasks Table

The "tasks" table stores information about tasks assigned to employees.

Example columns:

- "id" – Unique ID of the task.
- "employee_id" – ID of the employee assigned to the task.
- "task" – Description or name of the task.
- "status" – Current status of the task, such as Pending or Completed.


Step 1: Start XAMPP

Open XAMPP Control Panel and start:

- Apache
- MySQL

__________________________________________________________________________________________________________________________________________

Step 2: Open the Project Folder

Open the project folder in Visual Studio Code.

Open the terminal inside the project folder.

Step 3: Install Required Packages

Run the following command in the terminal:

npm install

This command installs all the required Node.js packages mentioned in the project.
__________________________________________________________________________________________________________________________________________
Step 4: Start the Server

Run:

node server.js

If the server starts successfully, the application will run on port 5000.

Step 5: Open the Application

Open a web browser and enter:

http://localhost:5000

The Employee Task Management System will then be displayed in the browser.

Port Error Fix

If port 5000 is already being used by another Node.js process, the following command can be used in the terminal:

taskkill /f /im node.exe

After running the command, start the server again:

node server.js

__________________________________________________________________________________________________________________________________________

6. Features of the Project

The Employee Task Management System provides the following features:

1. Add Employee

The user can add a new employee by entering the required employee details. The information is stored in the MySQL database.

2. View Employee List

The system displays the list of employees stored in the database. This makes it easy to view and manage employee information.

3. Assign Task

Tasks can be assigned to employees through the system. The assigned task information is stored in the database.

4. Complete Task

The task status can be updated after the employee completes the assigned task. This helps in tracking the progress of tasks.

5. Database Management

The system uses MySQL to store employee and task information, allowing the data to be maintained systematically.

------------------------------------------------------------------------------------------------------------------------------------------

7. Screenshots / Output

<img width="1195" height="357" alt="Home page" src="https://github.com/user-attachments/assets/279423e8-b36c-4e0b-b97d-898ee424492b" />
<img width="1360" height="623" alt="Employeelist" src="https://github.com/user-attachments/assets/08b27a65-daf1-4e9b-94bd-1d0ff8524184" />
<img width="1350" height="606" alt="Employee list management" src="https://github.com/user-attachments/assets/a2af267b-8a09-4c6e-bf44-e21045a30c00" />
__________________________________________________________________________________________________________________________________________

8. Created By

Name: [Srushati kichade]
Roll No: [U15CZ24S0091]
Course: BCA
College: KLE Society's BCA College, Nipani

---

Conclusion

The Employee Task Management System provides a simple and efficient way to manage employee information and their tasks. The project combines a user-friendly frontend with a Node.js and Express.js backend and a MySQL database.

This system helps reduce manual record management and makes it easier to add employees, view employee information, assign tasks, and track task completion.

The project also demonstrates the practical use of HTML, CSS, JavaScript, Node.js, Express.js, MySQL, phpMyAdmin, and VS Code in developing a complete web-based application.
