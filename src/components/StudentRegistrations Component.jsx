
import React, { useState } from 'react';

const StudentRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [selectedCourseOffering, setSelectedCourseOffering] = useState('');
  const [studentName, setStudentName] = useState('');
  const [courseOfferings, setCourseOfferings] = useState([
    { type: 'Individual', course: 'Hindi' },
    { type: 'Group', course: 'English' },
  ]);

  const registerStudent = () => {
    setRegistrations([...registrations, { studentName, courseOffering: selectedCourseOffering }]);
    setStudentName('');
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium mb-3">Student Registrations</h2>
      
      <div className="flex space-x-2 mb-3">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter Student Name"
        />
        <select
          value={selectedCourseOffering}
          onChange={(e) => setSelectedCourseOffering(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Course Offering</option>
          {courseOfferings.map((offering, index) => (
            <option key={index} value={`${offering.type} - ${offering.course}`}>
              {offering.type} - {offering.course}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={registerStudent}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-3"
      >
        Register Student
      </button>
      <ul className="space-y-2">
        {registrations.map((registration, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{registration.studentName} - {registration.courseOffering}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegistrations;
