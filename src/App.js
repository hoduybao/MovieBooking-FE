import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import path from './utils/path';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Authentication />}>
          <Route path={path.LOGIN} element={<Login />}></Route>
          <Route path={path.REGISTER} element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
