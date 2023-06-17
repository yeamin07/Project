import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

const Form = () => {

  const valueObject = useContext(StudentContext)

  const addStudent = (event) => {
    event.preventDefault();
    if (valueObject.studentName) {
      const newStudent = {
        id: Date.now(),
        name: valueObject.studentName,
      }
      valueObject.setStudentList([...valueObject.studentList, newStudent]);
      valueObject.setStudentName("")
    } else {
      alert("Please Enter a valid student name")
    }
  }

  const updateHandler = (event) => {
    event.preventDefault();
    valueObject.editableStudent.name = valueObject.studentName || valueObject.editableStudent.name;
    valueObject.setStudentName("");
    valueObject.setIsEditable(false);
    valueObject.setEditableStudent(null)
  }

  return (
    <form>
      <input placeholder="Please Enter the studentName" type="text" name="studentName" value={valueObject.studentName}
        onChange={(e) => valueObject.setStudentName(e.target.value)} />
      <button onClick={(e) => valueObject.isEditable === true ? updateHandler(e) : addStudent(e)}>
        {valueObject.isEditable === true ? "Update Student" : "Add Student"}
      </button>
    </form>
  )
}

export default Form