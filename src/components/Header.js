import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import path from "../utils/path";
import { BiLogIn } from "react-icons/bi";
import {BsSearch} from 'react-icons/bs'
import { useState } from "react";
function Header({ currentPage, onSwitchPage }) {
  
  const [visibleSearch,setVisibleSearch]=useState(false);
  console.log(visibleSearch)
  const handleSwitch=()=>{
    if(currentPage==='login')
    {
      onSwitchPage("register")
    }
    else{
      onSwitchPage("login");
    }
  }
  return (
    <div className="flex justify-center w-full h-[56px] bg-[#210035]">
      <div className="w-main flex justify-between items-center">
        <Link to={`/${path.HOME}`}>
          <img src={logo} alt="logo" className="w-[120px] cursor-pointer" />
        </Link>
        {currentPage==="login"&&<Link to="/auth/register" onClick={()=>handleSwitch}>
        <button className="flex justify-center gap-2 text-sm rounded items-center bg-purple-900 hover:bg-white hover:text-black h-8 text-white px-5">
          <BiLogIn size={20} />
          <span>Register</span> 
        </button>
        </Link>}
        {currentPage==="register"&&<Link to="/auth/login" onClick={()=>handleSwitch}>
        <button className="flex justify-center gap-2 text-sm rounded items-center bg-purple-900 hover:bg-white hover:text-black h-8 text-white px-5">
          <BiLogIn size={20} />
          <span>Login</span> 
        </button>
        </Link>}
        {currentPage!=="register"&&currentPage!=="login"&&
        <div className="flex justify-end "> 
        <input className={`${
            visibleSearch? "visible animate-search-input":"invisible"
          } border border-gray-500 rounded-l-sm bg-[#210035] px-2 text-white text-sm`}></input>
         <button className="peer flex justify-center gap-2 text-sm rounded-sm items-center bg-purple-900 hover:bg-white hover:text-black h-8 text-white px-5" onClick={()=>setVisibleSearch((pre)=>!pre)} >
          <BsSearch size={15} />
        </button>
        </div>
       
        }
        
       
      </div>
    </div>
  );
}

export default Header;
