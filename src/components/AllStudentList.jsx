import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

const AllStudentList = () => {

    const valueObject = useContext(StudentContext)

    const deleteHandler = (id) => {
        const newStudentList = valueObject.studentList.filter(student => student.id !== id);
        valueObject.setStudentList(newStudentList)
    }

    const editHandler = (id) => {
        const tobeEditedItem = valueObject.studentList.find(student => student.id === id)
        valueObject.setIsEditable(true);
        valueObject.setEditableStudent(tobeEditedItem);
        valueObject.setStudentName(tobeEditedItem.name)
    }

    const presentHandler = (id) => {
        const student = valueObject.studentList.find(student => student.id === id);
        if (student.isPresent === undefined) {
            student.isPresent = true;
            valueObject.setStudentList([...valueObject.studentList]);
        } else if (student.isPresent === true) {
            alert("The student is already is the present list")
        } else if (student.isPresent === false) {
            alert("The student is already is the Absent list. Please use the Accidentally Added button")
        }
    }

    const absentHandler = (id) => {
        const student = valueObject.studentList.find(student => student.id === id);
        if (student.isPresent === undefined) {
            student.isPresent = false;
            valueObject.setStudentList([...valueObject.studentList]);
        } else if (student.isPresent === false) {
            alert("The student is already is the absent list")
        } else if (student.isPresent === true) {
            alert("The student is already is the present list. Please use the Accidentally Added button")
        }
    }

    return (
        <div className="allstudents">
            <h2>All Students</h2>
            <ul>
                {valueObject.studentList.map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => editHandler(student.id)} >Edit</button>
                        <button onClick={() => deleteHandler(student.id)} >Delete</button>
                        <button onClick={() => presentHandler(student.id)} >Present</button>
                        <button onClick={() => absentHandler(student.id)} >Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllStudentList