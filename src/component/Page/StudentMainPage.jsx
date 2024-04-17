import React, { useState } from 'react';
import Sidebar from '../SideBar/S_SideBar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './MainPage.css';

const StudentMainPage = () => {
  const [userName, setUserName] = useState('학생');

  // 공지사항 데이터에 날짜 정보 추가
  const [announcements, setAnnouncements] = useState([
    { message: '공지사항 1', date: '2024-04-15' },
    { message: '공지사항 2', date: '2024-04-16' },
    { message: '공지사항 3', date: '2024-04-17' }
  ]);
  
  const [courses, setCourses] = useState(['수학', '음악', '국어']);
  const navigate = useNavigate();

  const handleCourseClick = (courseName) => {
    navigate(`/course/${courseName}`);
  };

  return (
    <div className='main-container p-4 shadow bg-white rounded'>
      <div className='sidebar-container'>
        <Sidebar width={320} />
      </div>
      <div className="container mt-3  ">
        <div className='content-container '>
          <h1 className="mb-4 welcome-box">{userName}님, 환영합니다!</h1>
          <section className="mt-3 p-4 shadow bg-white rounded">
            <h2 className='section-title'>LMS 공지사항</h2>
            <ul className="list-group">
              {announcements.map((announcement, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center ">
                  {announcement.message}
                  <span className="text-muted" style={{ color: '#D3D3D3' }}>{announcement.date}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-4 p-4 shadow bg-white rounded">
            <h2 className='section-title '>수강중인 강의 목록</h2>
            <ul className="list-group">
              {courses.map((course, index) => (
                <li key={index} className="list-group-item list-group-item-action"
                    onClick={() => handleCourseClick(course)}
                    style={{ cursor: 'pointer' }}>
                  {course}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentMainPage;
