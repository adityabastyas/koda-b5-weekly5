import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useFormValidation from "../hook/useFormValidation";

function Signup() {
  const navigate = useNavigate();

  const { values, errors, handleChange, validate } = useFormValidation({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
  };
  return (
    <>
      <main className="bg-[url('/Group7.png')] bg-cover bg-no-repeat md:bg-[url('/Group8.png')]">
        <section>
          <div className="flex justify-center pt-[56px] md:pt-[80px]">
            <img
              className="h-[31.875px] w-[85px] md:h-[104px] md:w-[276px]"
              src="/tickitz1.png"
              alt=""
            />
          </div>
        </section>
        <section>
          <div className="mx-auto grid max-w-[546px] px-[24px] pt-[51.3px] pb-[138px]">
            <div className="] rounded-[8px] bg-[#FFFFFF]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!validate()) return;

                  localStorage.setItem(
                    "registeredUser",
                    JSON.stringify(values),
                  );

                  navigate("/signin");
                }}
                className="flex flex-col px-[21px] py-[52px]"
              >
                <div className="hidden items-center justify-between pb-[46px] md:flex">
                  <div className="flex flex-col items-center gap-[10px]">
                    <div className="font-[Mulish, sans-serif] flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#1D4ED8] text-[16px] font-[500] text-[#FFFFFF]">
                      1
                    </div>
                    <p className="font-[Mulish,sans-serif] text-[14px] font-[600] text-[#4E4B66]">
                      Fill Form
                    </p>
                  </div>

                  <div className="w-[70px] border-t-[1px] border-dashed border-[#A0A3BD]"></div>

                  <div className="flex flex-col items-center gap-[10px]">
                    <div className="font-[Mulish, sans-serif] flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#1D4ED8] text-[16px] font-[500] text-[#FFFFFF]">
                      2
                    </div>
                    <p className="font-[Mulish,sans-serif] text-[14px] font-[400] text-[#A0A3BD]">
                      Activate
                    </p>
                  </div>

                  <div className="w-[70px] border-t-[1px] border-dashed border-[#A0A3BD]"></div>

                  <div className="flex flex-col items-center gap-[10px]">
                    <div className="font-[Mulish, sans-serif] flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#1D4ED8] text-[16px] font-[500] text-[#FFFFFF]">
                      3
                    </div>
                    <p className="font-[Mulish,sans-serif] text-[14px] font-[400] text-[#A0A3BD]">
                      Done
                    </p>
                  </div>
                </div>
                <label
                  className="font-['Mulish',sans-serif] text-[16px] font-[400] text-[#4E4B66] md:font-[600]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="mt-[8.07px] mb-[27px] rounded-[4px] border-[1px] border-[#DEDEDE] px-[20.84px] py-[14.5px]"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Write your email"
                />

                <label
                  className="font-['Mulish',sans-serif] text-[16px] font-[400] text-[#4E4B66]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    className="mt-[8.07px] mb-[27px] w-full rounded-[4px] border-[1px] border-[#DEDEDE] px-[20.84px] py-[14.5px]"
                    type={show ? "text" : "password"}
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Write your password"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                  <span onClick={open} id="openClose">
                    <img
                      id="eye"
                      className="absolute top-7.5 right-3"
                      src="/eye1.svg"
                      alt="eye"
                    />
                    <img
                      id="eyeClose"
                      className="absolute top-7.5 right-3 hidden h-[16px] w-[18.3px]"
                      src="/eye-off.svg"
                      alt="eye close"
                    />
                  </span>
                </div>

                <button
                  type="submit"
                  className="flex h-[48px] items-center justify-center rounded-[4px] bg-[#1D4ED8] text-[#F7F7FC]"
                >
                  Join for free
                </button>

                <p className="text-8 py-[27px] text-center font-[400px] text-[#6E7191]">
                  Already have an account?
                  <Link to="/signin" className="text-[#1D4ED8] underline">
                    Log in
                  </Link>
                </p>

                <div className="flex items-center justify-center gap-[32px] pb-[27px]">
                  <div className="h-px flex-1 bg-gray-300"></div>
                  <p className="font-['Inter',sans-serif] text-[12px] text-gray-400">
                    Or
                  </p>
                  <div className="h-px flex-1 bg-gray-300"></div>
                </div>

                <div className="flex justify-center gap-[32px]">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[4px] shadow-md md:w-[182px]">
                    <a href="" target="_blank"></a>
                    <img src="/google.svg" alt="login with google" />
                  </div>
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[4px] shadow-md md:w-[182px]">
                    <a href="https://www.facebook.com/" target="_blank">
                      <img src="/facebook.svg" alt="login with facebook" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;
