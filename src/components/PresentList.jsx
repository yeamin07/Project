import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

const PresentList = (props) => {
    const { studentList } = useContext(StudentContext);
    return (
        <div className="present-students">
            <h2>Present Students</h2>
            <ul>
                {studentList.filter(student => student.isPresent === true).map(item => (
                    <li>
                        <span>{item.name}</span>
                        <button onClick={() => props.toggleIsPresent(item.id)} >Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PresentList