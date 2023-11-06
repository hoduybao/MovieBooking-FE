import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Detail from './pages/Detail';
import Booking from './pages/Booking';

import path from './utils/path';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Authentication />}>
          <Route path={path.LOGIN} element={<Login />}></Route>
          <Route path={path.REGISTER} element={<Register />}></Route>
          <Route path={path.BOOKING} element={<Booking />}></Route>
          <Route path={path.DETAIL} element={<Detail />}></Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
