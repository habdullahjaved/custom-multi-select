import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiSelect from "./MultiSelect";
const SelectDropdown = () => {
  const [select_Courses, set_Select_Courses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const courses = [
    { id: 1, label: "GATE" },
    { id: 2, label: "DSA" },
    { id: 3, label: "JAVA" },
    { id: 4, label: "C++" },
    { id: 5, label: "Web Development" },
  ];
  const dropDownShow = () => {
    setIsOpen(!isOpen);
  };
  const courseChange = (event) => {
    const courseId = parseInt(event.target.value);
    const choosen = event.target.checked;

    if (choosen) {
      set_Select_Courses([...select_Courses, courseId]);
    } else {
      set_Select_Courses(select_Courses.filter((id) => id !== courseId));
    }
  };
  console.log(select_Courses);
  return (
    <div>
      {/* <h1 style={{ color: "green", marginBottom: "20px" }}>GeeksforGeeks</h1> */}
      <div className="d-flex justify-content-center">
        <MultiSelect
          isOpen={isOpen}
          courseChange={courseChange}
          courses={courses}
          dropDownShow={dropDownShow}
          select_Courses={select_Courses}
        />
        <div style={{ marginLeft: "20px", width: "50%" }}>
          <h2>Selected Items:</h2>
          <ul>
            {select_Courses.map((optionId) => (
              <li key={optionId}>
                {courses.find((option) => option.id === optionId)?.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SelectDropdown;
