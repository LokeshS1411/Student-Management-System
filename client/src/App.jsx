import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import ConfirmStudent from './components/ConfirmStudent';
import StudentList from './components/StudentList';
import './App.css'

function App() {
  return (
    <>
      <div className="body">
        <div className="app-container">
          <div className="app-heading">
            <h1>Student Management System</h1>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<AddStudent />} />
            <Route path="/confirm" element={<ConfirmStudent />} />
            <Route path="/list" element={<StudentList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
