import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/StudentList.css';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isopen, setIsopen] = useState(false);
  const [student, setStudent] = useState({ rollNo: '', name: '', age: '', std: '', gender: 'M', phone: '', email: '' });


  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const result = await axios.get('http://localhost:5000/students');
    setStudents(result.data);
  };

  const handleDelete = async (rollNo) => {
    const ok = window.confirm(`Are you sure,You want to Delete  ${student.name} RollNo ${rollNo}`);
    if (ok) {
      await axios.delete(`http://localhost:5000/students/${rollNo}`);
      fetchStudents();
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate = (student) => {
    setStudent(student)
    setIsopen(true);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    setIsopen(false)
    fetchStudents();
  }
  
  const handledataADD = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/students/${student.rollNo}`, student).then((res) => {
      setStudent(res.data)
    })
  }
  return (
    <div className='list-container'>
      <h1 className='list-heading'>Student List</h1>
      <h2 className='list-count'>Total Students: {students.length}</h2>
      <input className='search'
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="link"> <Link to={'/'}><button className='list-add' >add user</button></Link></div>
      <table className='table'>
        <thead>
          <tr>
            <th>S.NO </th>
            <th>ROLL NO</th>
            <th>NAME </th>
            <th>AGE </th>
            <th>STANDARD</th>
            <th>GENDER</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => {
            return (
              <tr key={student.rollNo}>
                <td>{index + 1}</td>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.std}</td>
                <td>{student.gender}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td><button className='update-btn' onClick={() => handleUpdate(student)}>update</button> </td>
                <td><button className='delete-btn' onClick={() => handleDelete(student.rollNo)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {isopen && <div className='model'>
        <div className='list-model'>
          <h1 className='list-head'>Update Student Details</h1>
          <form className='list-details'>
            <label className='list-label' htmlFor="rollno">Enter RollNo: </label>
            <input className='list-input' type="text" name="rollNo" value={student.rollNo} placeholder="Roll No" required />
            <label className='list-label' htmlFor="name">Enter Student Name :</label>
            <input className='list-input' type="text" name="name" value={student.name} placeholder="Name" onChange={handleChange} required />
            <label className='list-label' htmlFor="age">Enter Student Age :</label>
            <input className='list-input' type="number" name="age" value={student.age} placeholder="Age" onChange={handleChange} required />
            <label className='list-label' htmlFor="std">Enter Student Std :</label>
            <input className='list-input' type="text" name="std" value={student.std} placeholder="Standard" onChange={handleChange} required />
            <label className='list-label' htmlFor="phone">Enter Student PhoneNo :</label>
            <input className='list-input' type="text" name="phone" value={student.phone} placeholder="Phone" onChange={handleChange} required />
            <label className='list-label' htmlFor="email">Enter Student Email :</label>
            <input className='list-input' type="email" name="email" value={student.email} placeholder="Email" onChange={handleChange} required />
            <label htmlFor="gender" className='gender'>Select Gender :</label>
            <select name="gender" value={student.gender} onChange={handleChange} required>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <button className='list-close' onClick={handleClose}>close</button>
            <button className='list-update' onClick={handledataADD}>Update</button>
          </form>
        </div>
      </div>}
    </div>
  );
}

export default StudentList;
