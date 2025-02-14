// components/Courses.js
import React, { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  const addCourse = () => {
    setCourses([...courses, courseName]);
    setCourseName('');
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium mb-3">Courses</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-3 w-full"
        placeholder="Enter Course Name"
      />
      <button
        onClick={addCourse}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-3"
      >
        Add Course
      </button>
      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{course}</span>
            <button
              onClick={() => deleteCourse(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
