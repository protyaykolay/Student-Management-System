import axios from "axios";
import {useEffect,useState} from "react";

function StudentList(){

const [students,setStudents]=useState([]);

useEffect(()=>{
fetchStudents();
},[]);

const fetchStudents=async()=>{
const res=await axios.get("http://localhost:5000/students");
setStudents(res.data);
}

const deleteStudent=async(id)=>{
await axios.delete(`http://localhost:5000/students/${id}`);
fetchStudents();
}

return(

<div>

<h2>Student List</h2>

{students.map((s)=>(
<div className="student-item" key={s._id}>

<span>{s.name} - {s.course}</span>

<button
className="delete-btn"
onClick={()=>deleteStudent(s._id)}
>
Delete
</button>

</div>
))}

</div>

)
}

export default StudentList;