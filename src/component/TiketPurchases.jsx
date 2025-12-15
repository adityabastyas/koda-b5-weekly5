import Guaranteed from "../assets/Guaranteed.svg";
import CustomerSupport from "../assets/CustomerSupport.svg";

function TiketPurchases() {
  return (
    <main className="px-[24px] pt-[49px] md:px-[90px] lg:px-[130px]">
      <section className="md:flex md:items-center md:justify-between md:gap-[20px]">
        <div className="flex flex-col gap-[19px] md:gap-[10px]">
          <h2 className="font-['Mulish', sans-serif] font-[Mulish, sans-serif] text-center text-[18px] font-bold text-[#1D4ED8] md:text-start">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h2>
          <h1 className="font-['Mulish', sans-serif] text-center text-[32px] font-medium text-[#121212] md:text-start md:text-[48px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <p className="font-['Mulish', sans-serif] text-center text-[16px] font-normal text-[#A0A3BD] md:text-start">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="mt-[19px] flex justify-center gap-[10px] md:min-w-[70px]">
          <div>
            <img className="mb-[12px]" src="/purchases1D.svg" alt="mavia" />
            <img className="" src="/purchases2D.svg" alt="spiderman" />
          </div>
          <div>
            <img className="mb-[12px]" src="/purchases3D.svg" alt="lion" />
            <img src="/purchases4D.svg" alt="roblox" />
          </div>
        </div>
      </section>

      <section className="mt-[70px] md:flex md:flex-col">
        <div className="mb-[33px] flex flex-col items-center items-start md:justify-start">
          <h2 className='mb-[14px] font-["Mulish",sans-serif] text-[18px] font-bold text-[#1D4ED8]'>
            WHY CHOOSE US
          </h2>
          <h1 className="text-center font-['Mulish',sans-serif] text-[32px] font-normal text-[#121212] md:text-start">
            Unleashing the Ultimate Movie Experience
          </h1>
        </div>
        <div className="md:flex md:justify-start">
          <div className="mb-[33px] flex flex-col items-center items-start justify-center md:justify-start">
            <img src={Guaranteed} alt="" />
            <p className='my-[19px] font-["Mulish",sans-serif] text-[18px] font-bold text-[#18181B]'>
              Guaranteed
            </p>
            <p className='text-center font-["Mulish",sans-serif] text-[16px] font-[400] text-[#52525B] md:text-start'>
              All tickets are official and guaranteed valid, so you can enjoy
              your movie without any worries.
            </p>
          </div>
          <div className="mb-[33px] flex flex-col items-center items-start justify-center md:justify-start">
            <img src={Guaranteed} alt="" />
            <p className='my-[19px] font-["Mulish",sans-serif] text-[18px] font-bold text-[#18181B]'>
              Affordable
            </p>
            <p className='text-center font-["Mulish",sans-serif] text-[16px] font-[400] text-[#52525B] md:text-start'>
              Get movie tickets at affordable prices with exciting deals and
              promotions.
            </p>
          </div>
          <div className="mb-[33px] flex flex-col items-center items-start justify-center md:justify-start">
            <img src={CustomerSupport} alt="" />
            <p className='my-[19px] font-["Mulish",sans-serif] text-[18px] font-bold text-[#18181B]'>
              24/7 Customer Support
            </p>
            <p className='text-center font-["Mulish",sans-serif] text-[16px] font-[400] text-[#52525B] md:text-start'>
              Our customer support team is available 24/7 to assist you with
              bookings and any issues.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TiketPurchases;
