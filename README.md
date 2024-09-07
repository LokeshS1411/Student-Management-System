# Student Management System

This is a fully responsive Student Management System built using React (with Vite) on the front end and Express.js on the backend. MySQL is used for managing the student data. The system allows users to perform CRUD (Create, Read, Update, Delete) operations for student records. The app is designed with full responsiveness, ensuring compatibility across various devices.

## Features

- Add new student information
- Update existing student details
- Fetch a list of all students
- Delete student records
- Fully responsive design for better user experience on mobile, tablet, and desktop screens
- Patch method used for specific updates

## Technologies Used

### Frontend

- **React.js**: Front-end library for building the user interface.
- **Vite**: Fast build tool and development server for React.
- **HTML5/CSS3**: For the structure and styling of the app.

### Backend

- **Node.js**: JavaScript runtime used for building the backend.
- **Express.js**: Web framework used for handling routes and APIs.
- **MySQL**: Database used for storing student information.

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LokeshS1411/Student-Management-System.git
   cd student-management-system
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Run the MySQL database and create a new database (if not already created):
     ```sql
     CREATE DATABASE studentdb;
     ```
   - Run the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     npm run dev
     ```

4. **Access the application**:
   - Open your browser and go to ` http://localhost:5173/` for the frontend.
   - The backend API will be running on `http://localhost:5000`.

## API Endpoints

- **GET** `/api/students`: Fetch all student records.
- **POST** `/api/students`: Add a new student.
- **PATCH** `/api/students/:id`: Update a specific student's details.
- **DELETE** `/api/students/:id`: Delete a student's record.


## Responsive Design

This app uses responsive web design principles to ensure a consistent experience on mobile, tablet, and desktop screens. The layout adjusts dynamically using Bootstrap grid and media queries.


https://github.com/user-attachments/assets/cd4c884f-929a-4fc2-b948-8721e048d7a3

