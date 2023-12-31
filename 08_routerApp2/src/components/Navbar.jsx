import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className='text-richblack-100 flex gap-x-6'>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>


      {/* Login - SignUp - LogOut - Dashboard */}
      <div className='flex items-center gap-x-4'>
        {!isLoggedIn && ( //{} this brackets is only used for so we can write a condition,if login nhi h to login or signup k buttons render honge, nhi to logout or dashboard wale render honge
          <Link to="/login">
            <button 
            className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
            >Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button 
            className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                    >Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button 
            className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700' onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out")
            }}
            >Log Out</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/Dashboard">
            <button 
            className='bg-richblack-800 text-richblack-100 py-[8px] 
                      px-[12px] rounded-[8px] border border-richblack-700'
                      >Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
