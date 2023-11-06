import { Link } from "react-router-dom";
function Login() {
  

    return (  
        <div className="relative w-full min-h-screen">
            <div className="absolute top-[40%] bg-white rounded-2xl border shadow-2xl  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px]">
 
              <h3 className="py-3 bg-purple-900 rounded-t-2xl text-white font-medium text-center text-lg">Login to Cinetickets</h3>
            <div className="p-8 text-sm flex flex-col">
                <label>Email / Mobile</label>
                <input type="text" className="pl-2 mt-1 mb-4 p-[6px] rounded-md border border-gray-300  focus:border-sky-400"   ></input> 
                <label>Password</label>
                <input type="password" className=" pl-2 my-1 p-[6px] rounded-md border border-gray-300  focus:border-sky-400"   ></input> 
                <Link>
                <div className="text-right">Forgot your <span className="text-purple-600"> Password ?</span></div>
                </Link>
                <button className="bg-purple-800 cursor-pointer text-white rounded-md py-[6px] text-base mt-6 mb-10">LOGIN</button>
                <Link>
                <div className="text-center">Did you have an account yet? <span className="text-purple-600"> Register now</span></div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Login;