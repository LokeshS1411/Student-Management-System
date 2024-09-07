import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/AddStudent.css'

function AddStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialState = location.state?.student || {
    rollNo: '', name: '', age: '', std: '', gender: 'M', phone: '', email: ''
  };

  const [student, setStudent] = useState(initialState);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', { state: { student } });
  };

  return (
    <>

      <div className='add-container'>
        <div className='add-heading'>
          <h1 className='add-head'><b>Add Student</b></h1></div>
        <form onSubmit={handleSubmit} className='add-details'>
          <label htmlFor="rollno">Enter RollNo: </label>
          <input type="text" name="rollNo" value={student.rollNo} placeholder="Roll No" onChange={handleChange} required />
          <label htmlFor="name">Enter Student Name :</label>
          <input type="text" name="name" value={student.name} placeholder="Name" onChange={handleChange} required />
          <label htmlFor="age">Enter Student Age :</label>
          <input type="number" name="age" value={student.age} placeholder="Age" onChange={handleChange} required />
          <label htmlFor="std">Enter Student Std :</label>
          <input type="text" name="std" value={student.std} placeholder="Standard" onChange={handleChange} required />
          <label htmlFor="phone">Enter Student PhoneNo :</label>
          <input type="text" name="phone" value={student.phone} placeholder="Phone" onChange={handleChange} required />
          <label htmlFor="email">Enter Student Email :</label>
          <input type="email" name="email" value={student.email} placeholder="Email" onChange={handleChange} required />
          <label htmlFor="gender" className='gender'>Select Gender :</label>
          <select name="gender" value={student.gender} onChange={handleChange} required>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <div className="add-btn"><button type="submit" className='confirm'>Confirm</button></div>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
