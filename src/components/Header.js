import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import path from "../utils/path";
import { BiLogIn } from "react-icons/bi";
function Header({ currentPage, onSwitchPage }) {
  
  return (
    <div className="flex justify-center w-full h-[56px] bg-black">
      <div className="w-main flex justify-between items-center">
        <Link to={`/${path.HOME}`}>
          <img src={logo} alt="logo" className="w-[120px] cursor-pointer" />
        </Link>
        <Link to={currentPage==="login"?"/register":"/login"} onClick={()=>{
            onSwitchPage(currentPage==="login"?"register":"login")
        }}>
        <button className="flex justify-center gap-2 text-sm rounded items-center bg-purple-900 hover:bg-white hover:text-black h-8 text-white px-5">
          <BiLogIn size={20} />
          <span>{currentPage==="login"?"Register":"Login"}</span> 
        </button>
        </Link>
       
      </div>
    </div>
  );
}

export default Header;
