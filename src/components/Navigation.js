import { NavLink } from "react-router-dom";
import {navigation} from "../utils/constant"

function Navigation() {
    return <div className="w-full bg-[#31064a] h-[50px] py-[10px] flex justify-center">
        <div className='w-main text-sm flex items-center'>
    {navigation.map(el=>(
      <NavLink to={el.path} key={el.id} className={({isActive})=> isActive ?'text-white px-3 py-1 rounded mr-2 bg-[#5f1a89]':'text-white mr-2 px-3 py-1 rounded hover:bg-[#5f1a89]'}>
        {el.value}
      </NavLink>
    ))}  
  </div>
    </div>
}

export default Navigation;