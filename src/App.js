import React, { useState,useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './component/Page/LoginPage';
import SignUpPage from './component/Page/SignUpPage';
import StudentMainPage from './component/Page/StudentMainPage';
import TeacherMainPage from './component/Page/TeacherMainPage';
import CoursePage from './component/Page/CoursePage';
import CoursePageT from './component/Page/CoursePageT';
import StudentPage from './component/Check/StudentPage';
import TeacherPage from './component/Check/TeacherPage';




function App() {
  return (
    
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/StudentMainPage" element={<StudentMainPage />} />
            <Route path="/TeacherMainPage" element={<TeacherMainPage />} />
          
            <Route path="/course/:courseName" element={<CoursePage />} />
            <Route path="/courseT/:courseName" element={<CoursePageT />} />
            <Route path="/StudentPage" element={<StudentPage />} />
            <Route path="/TeacherPage" element={<TeacherPage />} />
            
            {/* 추가적으로 다른 경로들도 여기에 구성할 수 있습니다. */}
          </Routes>
        </Router>

      
  );
}

export default App;