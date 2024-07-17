import React from "react";
import { Form } from "react-bootstrap";
import { ChevronBarDown, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import "./MultiSelect.css";

const MultiSelect = ({
  courses,
  courseChange,
  isOpen,
  dropDownShow,
  select_Courses,
}) => {
  return (
    <div className="custom-dropdown">
      <button
        className="custom-dropdown-toggle green-button"
        type="button"
        id="multiSelectDropdown"
        onClick={dropDownShow}
      >
        Select Options{" "}
        {isOpen ? (
          <ChevronUp className="ml-1" />
        ) : (
          <ChevronDown className="ml-1" />
        )}{" "}
        {/* Carrot icon */}
      </button>
      {isOpen && (
        <div
          className={`custom-dropdown-menu ${isOpen ? "show" : ""}`}
          aria-labelledby="multiSelectDropdown"
        >
          {courses.map((option) => (
            <Form.Check
              className="custom-checkbox"
              key={option.id}
              type="checkbox"
              id={`option_${option.id}`}
              label={option.label}
              checked={select_Courses.includes(option.id)}
              onChange={courseChange}
              value={option.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
