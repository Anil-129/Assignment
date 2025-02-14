// components/CourseOfferings.js
import React, { useState } from 'react';

const CourseOfferings = () => {
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [courseTypes, setCourseTypes] = useState(['Individual', 'Group', 'Special']);
  const [courses, setCourses] = useState(['Hindi', 'English', 'Urdu']);

  const addCourseOffering = () => {
    setCourseOfferings([...courseOfferings, { course: selectedCourse, type: selectedCourseType }]);
  };

  const deleteCourseOffering = (index) => {
    setCourseOfferings(courseOfferings.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium mb-3">Course Offerings</h2>
      
      <div className="flex space-x-2 mb-3">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <button
        onClick={addCourseOffering}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-3"
      >
        Add Course Offering
      </button>
      <ul className="space-y-2">
        {courseOfferings.map((offering, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{offering.type} - {offering.course}</span>
            <button
              onClick={() => deleteCourseOffering(index)}
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

export default CourseOfferings;
