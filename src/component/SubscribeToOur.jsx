import React from "react";

function SubscribeToOur() {
  return (
    <>
      <section className='px-[24px] md:px-[130px]'>
        <div className='bg-[#1D4ED8] pr-[21px] pl-[36px] pt-[61px] pb-[138px] rounded-[9px] '>
          <div>
            <h1 className="font-['Mulish',sans-serif] font-normal text-[32px] text-center text-[#FFFFFF] mb-[37px]">
              Subscribe to our newsletter
            </h1>
          </div>
          <div className='flex flex-col md:flex-row md:justify-center md:gap-[12px]'>
            <input
              className="font-['Mulish', sans-serif] h-[60px]  font-normal text-[16px] text-[#FFFFFF] py-[17px] pl-[20px] pr-[17px] border border-[#D4D4D8] rounded-[9px] mb-[11px]"
              type='text'
              placeholder='First name'
            />
            <input
              className="font-['Mulish',sans-serif] h-[60px] font-normal text-[16px] text-[#FFFFFF] py-[17px] pl-[20px] pr-[17px] border border-[#D4D4D8] rounded-[9px] mb-[11px]"
              type='email'
              placeholder='Email address'
            />
            <a
              className="px-[68.5px] text-center py-[16px] h-[60px] bg-[#FFFFFF] font-['Mulish',sans-serif] text-[#1D4ED8] font-bold text-[18px] rounded-[9px] "
              href=''
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubscribeToOur;
