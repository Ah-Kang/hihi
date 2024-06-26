import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './LoginPage.css';


const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = true; // 로그인 성공 여부 (임시)

    if (loginSuccess) {
      navigate('/StudentMainPage');
    } else {
      alert('로그인 실패');
    }
  };

  const handleSignUpClick = () => {
    navigate('/SignUpPage');
  };

  return (
    <div className="container mt-5">  {/* Bootstrap container 클래스 사용 */}
      <div className="row justify-content-center">  {/* Bootstrap row와 중앙 정렬 클래스 사용 */}
        <div className="col-md-6">  {/* Bootstrap column 클래스 사용 */}
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
          <h2 className='title-1 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-file-earmark-code-fill icon" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708"/>
</svg>
             AI&SW 새싹인재 양성교육
            </h2>
            <h2 className=" mb-4 login">로그인</h2>
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
                placeholder="비밀번호를 입력하세요."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">로그인</button>
            <button type="button" onClick={handleSignUpClick} className="btn btn-secondary w-100 mt-2">회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
