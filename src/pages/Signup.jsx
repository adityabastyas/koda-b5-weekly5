import { useState } from "react";

function Signup() {
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
                <div className='hidden md:flex items-center justify-between pb-[46px]'>
                  <div className='flex flex-col gap-[10px] items-center'>
                    <div className='bg-[#1D4ED8] h-[47px] w-[47px] rounded-full flex items-center justify-center text-[#FFFFFF] font-[Mulish, sans-serif] font-[500] text-[16px]'>
                      1
                    </div>
                    <p className='text-[#4E4B66] font-[600] text-[14px] font-[Mulish,sans-serif]'>
                      Fill Form
                    </p>
                  </div>

                  <div className='border-dashed w-[70px] border-t-[1px] border-[#A0A3BD]'></div>

                  <div className='flex flex-col gap-[10px] items-center'>
                    <div className='bg-[#1D4ED8] h-[47px] w-[47px] rounded-full flex items-center justify-center text-[#FFFFFF] font-[Mulish, sans-serif] font-[500] text-[16px]'>
                      2
                    </div>
                    <p className='text-[#A0A3BD] font-[400] text-[14px] font-[Mulish,sans-serif]'>
                      Activate
                    </p>
                  </div>

                  <div className='border-dashed w-[70px] border-t-[1px] border-[#A0A3BD]'></div>

                  <div className='flex flex-col gap-[10px] items-center'>
                    <div className='bg-[#1D4ED8] h-[47px] w-[47px] rounded-full flex items-center justify-center text-[#FFFFFF] font-[Mulish, sans-serif] font-[500] text-[16px]'>
                      3
                    </div>
                    <p className='text-[#A0A3BD] font-[400] text-[14px] font-[Mulish,sans-serif]'>
                      Done
                    </p>
                  </div>
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

                <a
                  className='bg-[#1D4ED8] rounded-[4px] h-[48px] flex items-center justify-center text-[#F7F7FC]'
                  href=''
                >
                  Join for free
                </a>

                <p className='text-center font-[400px] py-[27px] text-8 text-[#6E7191]'>
                  Already have an account?
                  <a className='text-[#1D4ED8] underline' href=''>
                    Log in
                  </a>
                </p>

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

export default Signup;
