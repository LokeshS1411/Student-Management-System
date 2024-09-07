import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/ConfirmStudent.css';

function ConfirmStudent() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:5000/students', state.student);
      navigate('/list');
    } catch (error) {
      console.error('Error adding student:', error);
      alert(`This Roll Number is already taken by another student, please use a different one.`);

    }
  };

  return (
    <div className='confirm-container'>
      <h1 className='confirm-head'>Confirm Student Details</h1>
      <table className='con-table'>
        <tbody>
          <tr>
            <th>Roll No:</th>
            <td>{state.student.rollNo}</td>

          </tr>
          <tr>
            <th>Name:</th>
            <td>{state.student.name}</td>
          </tr>
          <tr>
            <th>Standard </th>
            <td>{state.student.std}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{state.student.gender}</td>
          </tr>
          <tr>
            <th>Phone No:</th>
            <td>{state.student.phone}</td>
          </tr>
          <tr>
            <th>email:</th>
            <td>{state.student.email}</td>
          </tr>
        </tbody>
      </table>
      <div className="confirm-btn">
        <button className='confirm-add ' onClick={handleAdd}>ADD</button>
        <button className='confirm-back' onClick={() => navigate('/', { state: { student: state.student } })}>Back</button>
      </div>
    </div>
  );
}

export default ConfirmStudent;
