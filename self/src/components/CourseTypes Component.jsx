
import React, { useState } from 'react';

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseTypeName, setCourseTypeName] = useState('');

  const addCourseType = () => {
    setCourseTypes([...courseTypes, courseTypeName]);
    setCourseTypeName('');
  };

  const deleteCourseType = (index) => {
    setCourseTypes(courseTypes.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium mb-3">Course Types</h2>
      <input
        type="text"
        value={courseTypeName}
        onChange={(e) => setCourseTypeName(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-3 w-full"
        placeholder="Enter Course Type"
      />
      <button
        onClick={addCourseType}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-3"
      >
        Add Course Type
      </button>
      <ul className="space-y-2">
        {courseTypes.map((courseType, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{courseType}</span>
            <button
              onClick={() => deleteCourseType(index)}
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

export default CourseTypes;
