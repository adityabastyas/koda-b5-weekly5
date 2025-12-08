import { useState } from "react";
import { Link } from "react-router";
import Home from "./Home";

function Signin() {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
  };
  return (
    <>
      <main className="bg-[url('/Group7.png')] md:bg-[url('/Group8.png')] bg-no-repeat bg-cover">
        <section>
          <div className='flex justify-center pt-[56px] md:pt-[80px]'>
            <img
              className='w-[85px] h-[31.875px] md:w-[276px] md:h-[104px]'
              src='/tickitz1.png'
              alt=''
            />
          </div>
        </section>
        <section>
          <div className='px-[24px] pb-[138px] pt-[51.3px] max-w-[546px] grid mx-auto'>
            <div className='bg-[#FFFFFF] ] rounded-[8px]'>
              <form className='flex flex-col px-[21px] py-[52px] '>
                <div>
                  <h1 className="font-['Muslih',sans-serif] font-[700] text-[32px] text-[#121212]">
                    Welcome Back👋
                  </h1>
                  <p className='font-[400] text-[18px] font-[#A0A3BD] my-[25px]'>
                    Sign in with your data that you entered during your
                    registration
                  </p>
                </div>
                <label
                  className="text-[#4E4B66] text-[16px] font-[400] font-['Mulish',sans-serif] md:font-[600]"
                  for='email'
                >
                  Email
                </label>
                <input
                  className='rounded-[4px] border-[1px] border-[#DEDEDE] mt-[8.07px] mb-[27px] px-[20.84px] py-[14.5px]'
                  id='email'
                  type='email'
                  placeholder='Write your email'
                />

                <label
                  className="text-[#4E4B66] text-[16px] font-[400] font-['Mulish',sans-serif]"
                  for='password'
                >
                  Password
                </label>
                <div className='relative w-full'>
                  <input
                    className='rounded-[4px] border-[1px] border-[#DEDEDE] mt-[8.07px] mb-[27px] px-[20.84px] py-[14.5px] w-full'
                    type={show ? "text" : "password"}
                    name=''
                    id='password'
                    placeholder='Write your password'
                  />
                  <span onClick={open} id='openClose'>
                    <img
                      id='eye'
                      class='absolute right-3 top-7.5'
                      src='/eye1.svg'
                      alt='eye'
                    />
                    <img
                      id='eyeClose'
                      className='absolute hidden w-[18.3px] h-[16px] right-3 top-7.5'
                      src='/eye-off.svg'
                      alt='eye close'
                    />
                  </span>
                </div>
                <div className='flex justify-end mb-[25px]'>
                  <a
                    className='text-[#1D4ED8] no-underline text-[16px] font-["Inter",sans-serif]'
                    href=''
                  >
                    Forgot your password?
                  </a>
                </div>

                <a
                  className='bg-[#1D4ED8] rounded-[4px] h-[48px] flex items-center justify-center text-[#F7F7FC] mb-[25px]'
                  href=''
                >
                  {<Link to={<Home />}>Log in</Link>}
                </a>

                <div className='flex justify-center pb-[27px] items-center gap-[32px]'>
                  <div className='bg-gray-300 flex-1 h-px'></div>
                  <p className="text-gray-400 text-[12px] font-['Inter',sans-serif]">
                    Or
                  </p>
                  <div className='bg-gray-300 flex-1 h-px'></div>
                </div>

                <div className='flex gap-[32px] justify-center'>
                  <div className='h-[64px] w-[64px] flex items-center justify-center shadow-md rounded-[4px] md:w-[182px]'>
                    <a href='' target='_blank'></a>
                    <img src='/google.svg' alt='login with google' />
                  </div>
                  <div className='h-[64px] w-[64px] flex items-center justify-center shadow-md rounded-[4px] md:w-[182px]'>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <img src='/facebook.svg' alt='login with facebook' />
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
