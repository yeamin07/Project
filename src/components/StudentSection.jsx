import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import AbsentList from './AbsentList'
import AllStudentList from './AllStudentList'
import PresentList from './PresentList'

const StudentSection = () => {
    const { studentList, setStudentList } = useContext(StudentContext)

    const toggleIsPresent = (id) => {
        const student = studentList.find(student => student.id === id);
        student.isPresent = !student.isPresent;
        setStudentList([...studentList]);
    }

    return (
        <div className="student-section">
            <AllStudentList />
            <PresentList toggleIsPresent={toggleIsPresent} />
            <AbsentList toggleIsPresent={toggleIsPresent} />
        </div>
    )
}

export default StudentSection