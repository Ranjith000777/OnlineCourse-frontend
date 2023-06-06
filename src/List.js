import React ,{useState,useEffect}from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import './List.css'
import axios from 'axios';

function List() {

  const[students,setStudents]=useState([]) ;
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };
  

  const {id} = useParams()
  useEffect(()=>{
    loadUsers() ;
  },[]) ;

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/student/get") ;
    setStudents(result.data) ;
  }

  const deleteUser=async (id) => {
    await axios.delete(`http://localhost:8080/student/delete/${id}`)
    loadUsers()
  }

  return (
        <div>
        <div>
            <button className='back-button' onClick={navigateToHome}>BACK</button>
            <h1>STUDENT COURSE REGISTRATION</h1>
        </div>
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>E-Mail</th>
                        <th>Course name</th>
                        <th>Graduation Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((user,index) =>{
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.course}</td>
                                <td>{user.graduation}</td>
                                <td className='text-right'><Link className='edit-button' to={`/edit/${user.id}`}>
                                        Edit
                                    </Link></td>
                                    <td className='text-left'><button className='button-delete'
                                    onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
        </div>
    )
}

export default List