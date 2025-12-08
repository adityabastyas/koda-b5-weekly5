import Guaranteed from "../assets/Guaranteed.svg";
import CustomerSupport from "../assets/CustomerSupport.svg";

function TiketPurchases() {
  return (
    <main className='pt-[49px]  px-[24px] md:px-[130px]'>
      <section className='md:flex md:items-center md:justify-between md:gap-[20px]'>
        <div className='flex flex-col gap-[19px] md:gap-[10px]'>
          <h2 className="font-['Mulish', sans-serif] font-[Mulish, sans-serif] text-[#1D4ED8] font-bold text-[18px] text-center md:text-start">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h2>
          <h1 className="font-medium font-['Mulish', sans-serif] text-[32px] md:text-[48px] text-[#121212] text-center md:text-start">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <p className="text-[#A0A3BD] font-normal font-['Mulish', sans-serif] text-[16px] text-center md:text-start">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className='flex justify-center gap-[10px] mt-[19px]'>
          <div>
            <img className='mb-[12px] ' src='/purchases1D.svg' alt='mavia' />
            <img className='' src='/purchases2D.svg' alt='spiderman' />
          </div>
          <div>
            <img className='mb-[12px]' src='/purchases3D.svg' alt='lion' />
            <img src='/purchases4D.svg' alt='roblox' />
          </div>
        </div>
      </section>

      <section className='mt-[70px] md:flex md:flex-col'>
        <div className='flex flex-col  items-center mb-[33px] md:justify-start items-start'>
          <h2 className='font-bold text-[18px] text-[#1D4ED8] mb-[14px] font-["Mulish",sans-serif]'>
            WHY CHOOSE US
          </h2>
          <h1 className="font-['Mulish',sans-serif] font-normal text-[32px] text-[#121212] text-center md:text-start">
            Unleashing the Ultimate Movie Experience
          </h1>
        </div>
        <div className='md:flex md:justify-start'>
          <div className='flex flex-col items-center justify-center mb-[33px] md:justify-start items-start'>
            <img src={Guaranteed} alt='' />
            <p className='my-[19px] font-["Mulish",sans-serif] font-bold text-[18px] text-[#18181B]'>
              Guaranteed
            </p>
            <p className='text-center font-["Mulish",sans-serif] font-[400] text-[16px] text-[#52525B] md:text-start'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.sdsdsd
            </p>
          </div>
          <div className='flex flex-col items-center justify-center mb-[33px] md:justify-start items-start'>
            <img src={Guaranteed} alt='' />
            <p className='my-[19px] font-["Mulish",sans-serif] font-bold text-[18px] text-[#18181B] '>
              Affordable
            </p>
            <p className='text-center font-["Mulish",sans-serif] font-[400] text-[16px] text-[#52525B] md:text-start'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center mb-[33px] md:justify-start items-start'>
            <img src={CustomerSupport} alt='' />
            <p className='my-[19px] font-["Mulish",sans-serif] font-bold text-[18px] text-[#18181B]'>
              24/7 Customer Support
            </p>
            <p className='text-center font-["Mulish",sans-serif] font-[400] text-[16px] text-[#52525B] md:text-start'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TiketPurchases;
