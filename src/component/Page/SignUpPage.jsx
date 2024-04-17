import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');  // 'student' 또는 'teacher' 역할 상태
  const [parentPhone, setParentPhone] = useState('');  // 부모님 전화번호 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phone, password, role, parentPhone });
  };

  return (
    <div className="container mt-5">  {/* Bootstrap container 클래스 사용 */}
      <div className="row justify-content-center">  {/* Bootstrap row와 중앙 정렬 클래스 사용 */}
        <div className="col-md-6">  {/* Bootstrap column 클래스 사용 */}
          <form onSubmit={handleSubmit} className="p-4 shadow bg-white rounded">
            <h2 className="text-center mb-4">회원가입</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">이름</label>
              <input
                type="name"
                id="name"
                className="form-control"
                value={phone}
                placeholder="이름을 입력하세요."
                onChange={(e) => setName(e.target.value)}
                required
              
              />
            </div>
             
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">전화번호</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                value={phone}
                placeholder="전화번호를 입력하세요."
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">비밀번호</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={phone}
                placeholder="Email을 입력하세요."
                onChange={(e) => setEmail(e.target.value)}
                required
              
              />
            </div>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  className="form-check-input"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                />
                <label className="form-check-label" htmlFor="student">학생</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="teacher"
                  className="form-check-input"
                  checked={role === 'teacher'}
                  onChange={() => setRole('teacher')}
                />
                <label className="form-check-label" htmlFor="teacher">선생님</label>
              </div>
            </div>
            {role === 'student' && (
              <div className="mb-3">
                <label htmlFor="parentPhone" className="form-label">부모님 전화번호</label>
                <input
                  type="tel"
                  id="parentPhone"
                  className="form-control"
                  value={parentPhone}
                  placeholder="부모님 전화번호를 입력하세요"
                  onChange={(e) => setParentPhone(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100">회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
