import { useState } from "react";
import { useNavigate } from "react-router";
import useFormValidation from "../hook/useFormValidation";

function Signin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const { values, handleChange, validate } = useFormValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validate()) return;

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      values.email === savedUser.email &&
      values.password === savedUser.password
    ) {
      localStorage.setItem(
        "activeUser",
        JSON.stringify({ email: values.email }),
      );

      navigate("/");
    } else {
      setLoginError("Email atau password salah");
    }
  };

  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
  };
  return (
    <>
      <main className="relative bg-[url('/Group7.png')] bg-cover bg-no-repeat before:absolute before:inset-0 before:z-0 before:bg-black/20 md:bg-[url('/Group8.png')]">
        <section className="relative z-10">
          <div className="flex justify-center pt-[56px] md:pt-[80px]">
            <img
              className="h-[31.875px] w-[85px] md:h-[104px] md:w-[276px]"
              src="/tickitz1.png"
              alt=""
            />
          </div>
        </section>
        <section className="relative z-10">
          <div className="mx-auto grid max-w-[546px] px-[24px] pt-[51.3px] pb-[138px]">
            <div className="rounded-[8px] bg-[#FFFFFF]">
              <form
                className="flex flex-col px-[21px] py-[52px]"
                onSubmit={handleSubmit}
              >
                <div>
                  <h1 className="font-['Muslih',sans-serif] text-[32px] font-[700] text-[#121212]">
                    Welcome Back👋
                  </h1>
                  <p className="my-[25px] font-[#A0A3BD] text-[18px] font-[400]">
                    Sign in with your data that you entered during your
                    registration
                  </p>
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
                  type="email"
                  name="email"
                  required
                  placeholder="Write your email"
                  value={values.email}
                  onChange={handleChange}
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
                    required
                    placeholder="Write your password"
                    value={values.password}
                    onChange={handleChange}
                  />

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
                <div className="mb-[25px] flex justify-end">
                  <a
                    className='font-["Inter",sans-serif] text-[16px] text-[#1D4ED8] no-underline'
                    href=""
                  >
                    Forgot your password?
                  </a>
                </div>

                {loginError && (
                  <p className="mt-2 text-sm text-red-500">{loginError}</p>
                )}

                <button
                  className="mb-[25px] flex h-[48px] items-center justify-center rounded-[4px] bg-[#1D4ED8] text-[#F7F7FC]"
                  type="submit"
                >
                  Log in
                </button>

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

export default Signin;
