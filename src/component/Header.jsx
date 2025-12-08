import logo from "../assets/logoHeading.svg";
import logoHambu from "../assets/logoHamburger.svg";
import logoX from "../assets/logoX.png";
import { useState } from "react";
import { Link } from "react-router";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='sticky top-0 flex items-center justify-between h-[91px]  px-6'>
      <img className='h-[37px] w-[93px]' src={logo} alt='logo' />

      <div className='flex items-center gap-6'>
        <button onClick={() => setOpen(!open)} className='md:hidden'>
          <img src={open ? logoX : logoHambu} className='h-6 w-6' alt='menu' />
        </button>

        <div
          className={`
            ${open ? "block" : "hidden"}
            absolute top-[91px] right-6
            bg-white border rounded-lg shadow-md p-4 space-y-4

            md:static md:block
            md:bg-transparent md:border-0
            md:shadow-none md:p-0
          `}
        >
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-8'>
            <ul className='flex flex-col gap-3 md:flex-row md:gap-6'>
              <li className='hover:text-amber-600 cursor-pointer'>Home</li>
              <li className='hover:text-amber-600 cursor-pointer'>Movie</li>
              <li className='hover:text-amber-600 cursor-pointer'>
                Buy Ticket
              </li>
            </ul>

            <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
              <a
                href={Signin}
                className='font-semibold text-gray-700 hover:text-amber-700'
              >
                {/* <Link to={<Signin />}></Link> */}
                Sign In
              </a>
              <a className='bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700'>
                {/* <Link to={<Signup />}></Link> */}
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
