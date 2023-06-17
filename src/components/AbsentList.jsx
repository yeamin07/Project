import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

const AbsentList = (props) => {
    const { studentList } = useContext(StudentContext);
    return (
        <div className="absent-students">
            <h2>Absent Students</h2>
            <ul>
                {studentList.filter(student => student.isPresent === false).map(item => (
                    <li>
                        <span>{item.name}</span>
                        <button onClick={() => props.toggleIsPresent(item.id)} >Accidentally Added</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default AbsentList