import './App.css';
import MainPage from './Component/MainPage';
import SnsBoard from './Component/SnsBoard';
import MyDetail from './Component/MyDetail';
import UserDetail from './Component/UserDetail';
import UserDetail2 from './Component/UserDetail2';
import UserDetail3 from './Component/UserDetail3';
import UserDetail4 from './Component/UserDetail4';
import Setting from './Component/Setting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileEdit from './Component/ProfileEdit';
import Comment from './Component/Comment';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<SnsBoard />}
            />
            <Route
              path='/UserDetail'
              element={<UserDetail />}
            />
            <Route
              path='/Setting'
              element={<Setting />}
            />
            <Route
              path='/Comment'
              element={<Comment />}
            />
            <Route
              path='/ProfileEdit'
              element={<ProfileEdit />}
            />
            <Route
              path='/MyDetail'
              element={<MyDetail />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
