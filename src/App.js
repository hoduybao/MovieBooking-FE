import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Public/Home';
import Public from './pages/Public/Public';
import path from './utils/path';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.AUTHENTICATION} element={<Authentication />}>
          <Route path={path.LOGIN} element={<Login />}></Route>
          <Route path={path.REGISTER} element={<Register />}></Route>
        </Route>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
