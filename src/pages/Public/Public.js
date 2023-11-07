import React from "react";
import { Outlet} from "react-router-dom";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
const Public = () => {
 

  return (
    <div className="w-full flex flex-col items-center bg-purple-50">
      <Header/>
      <Navigation/>
      <div className="w-full">
      <Outlet/>
      </div>
    </div>
  );
};

export default Public;
