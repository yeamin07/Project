import { useState, createContext } from 'react'
export const StudentContext = createContext();

const StudentProvider = (props) => {
    const [studentName, setStudentName] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [isEditable, setIsEditable] = useState(false)
    const [editableStudent, setEditableStudent] = useState(null)

    const valueObject = {
        studentName,
        setStudentName,
        studentList,
        setStudentList,
        isEditable,
        setIsEditable,
        editableStudent,
        setEditableStudent
    }

    return (
        <StudentContext.Provider value={valueObject} >
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider