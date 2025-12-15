import logo from "../assets/logoHeading.svg";
import logoHambu from "../assets/logoHamburger.svg";
import logoX from "../assets/logoX.png";
import { useState } from "react";
import { Link } from "react-router";
// import Signin from "../pages/Signin";
// import Signup from "../pages/Signup";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Header() {
  const [open, setOpen] = useState(false);

  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setActiveUser(user);
    } else {
      setActiveUser(null);
    }
  }, []);

  return (
    <div className="sticky top-0 flex h-[91px] items-center justify-between px-6">
      <img className="h-[37px] w-[93px]" src={logo} alt="logo" />

      <div className="md: flex items-center justify-between gap-6">
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <img src={open ? logoX : logoHambu} className="h-6 w-6" alt="menu" />
        </button>

        <div
          className={` ${open ? "block" : "hidden"} absolute top-[91px] right-6 space-y-4 rounded-lg border bg-white p-4 shadow-md md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
              <li className="cursor-pointer hover:text-amber-600">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-amber-600">
                <Link to="/movie">Movie</Link>
              </li>
              <li className="cursor-pointer hover:text-amber-600">
                Buy Ticket
              </li>
            </ul>

            {/* <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <a className="font-semibold text-gray-700 hover:text-amber-700">
                <Link to="/signin">Sign In</Link>
              </a>
              <a className="rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
                <Link to="/signup">Sign Up</Link>
              </a>
            </div> */}

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              {activeUser ? (
                <>
                  {/* tampil email */}
                  <span className="font-semibold text-gray-700">
                    {activeUser.email}
                  </span>

                  {/* logout */}
                  <button
                    onClick={() => {
                      localStorage.removeItem("activeUser");
                      setActiveUser(null);
                      navigate("/signin");
                    }}
                    className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="font-semibold text-gray-700 hover:text-amber-700"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/signup"
                    className="rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
