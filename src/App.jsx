
import React, { useState } from 'react';
import './App.css'; 


import CourseTypes from './components/CourseTypes Component';
import Courses from './components/CourseOfferings Component';
import CourseOfferings from './components/Courses Component';
import StudentRegistrations from './components/StudentRegistrations Component';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-semibold mb-5">Course Management System</h1>
      
      <div className="space-y-5">
        <CourseTypes />
        <Courses />
        <CourseOfferings />
        <StudentRegistrations />
      </div>
    </div>
  );
};

export default App;
