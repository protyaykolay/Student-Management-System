import axios from "axios";
import {useState} from "react";

function AddStudent(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [course,setCourse]=useState("");
const [age,setAge]=useState("");

const handleSubmit=async(e)=>{
e.preventDefault();

await axios.post("http://localhost:5000/students/add",{
name,email,course,age
});

window.location.reload();
}

return(

<div>

<h2>Add Student</h2>

<form onSubmit={handleSubmit}>

<div className="form-row">

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Course"
value={course}
onChange={(e)=>setCourse(e.target.value)}
/>

<input
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<button className="add-btn">Add</button>

</div>

</form>

</div>

)
}

export default AddStudent;