import "./styles.css";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App(){

return(
<div className="container">

<h1 className="title">Student Management System</h1>

<div className="card">
<AddStudent/>
</div>

<div className="card">
<StudentList/>
</div>

</div>
)
}

export default App;