import React from "react";
import { Outlet, useNavigate,useLocation} from "react-router-dom";

import Header from "../../components/Header";
const Authentication = () => {
  const navigate = useNavigate();

  const location = useLocation();

  // Sử dụng location.pathname để xác định trang hiện tại
  const currentPage = location.pathname === "/login" ? "login" : "register";

  const handleSwitchPage = (page) => {
    if (page === "login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };  

  return (
    <div className="w-full flex flex-col items-center bg-purple-50">
      <Header currentPage={currentPage} onSwitchPage={handleSwitchPage}/>
      <div className="w-main">
      <Outlet/>
      </div>
    </div>
  );
};

export default Authentication;
