import logo from "../assets/logoHeading.svg";
import evb from "../assets/footerebv.id.svg";
import cineone from "../assets/footerCineOne21.svg";
import hiflik from "../assets/footerhiflix.svg";
import facebook from "../assets/footerFacebook.svg";
import instagram from "../assets/footerInstagram.svg";
import tweet from "../assets/footerTwitter.svg";
import youtube from "../assets/footerTwitter.svg";

function Footer() {
  return (
    <>
      <section className='py-[64px] px-[24px]  md:px-[130px]  '>
        <div className='md:grid md:grid-cols-[1fr_1fr_1fr_1fr] gap-14 '>
          <div className='md:flex flex-col'>
            <div>
              <img className='' src={logo} alt='' />
            </div>
            <p className="font-['Mulish',sans-serif] text-[#6E7191] font-normal text-[14px] md:text-[16px] mt-[12px] md:mt-[16px] mb-[40px]">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div>
            <p className="font-['Mulish',sans-serif] font-[600] text-[16px] text-[#000000] mb-[12px]">
              Explore
            </p>
            <div className='font-normal grid grid-cols-3 text-[14px] font-["Mulish",sans-serif] text-[#6E7191] md:flex md:flex-col mb-[48px]'>
              <p className=''>Cinemas</p>
              <p className=''>Movies List</p>
              <p>Notification</p>
              <p className='pt-[12px]'>My Ticket</p>
            </div>
          </div>

          <div className=' mb-[48.5px]'>
            <div>
              <p className="font-['Mulish',sans-serif] font-[600] mb-[16px] text-[16px] text-[#000000]">
                Our Sponsor
              </p>
              <div className='flex gap-[24px] items-center md:flex-col items-start'>
                <img className='h-[45px]' src={evb} alt='' />
                <img className='h-[28px]' src={cineone} alt='' />
                <img className='h-[26px]' src={hiflik} alt='' />
              </div>
            </div>
          </div>

          <div>
            <p className="font-['Mulish',sans-serif] font-[600] text-[16px] text-[#000000] mb-[16px]">
              Follow us
            </p>
            <div className='flex gap-[32px] md:flex-col'>
              <div className='md:flex md:gap-[15px]'>
                <img src={facebook} alt='' />
                <a className='hidden md:block' href=''>
                  Tickitz Cinema id
                </a>
              </div>

              <div className='md:flex md:gap-[15px]'>
                <img src={instagram} alt='' />
                <a className='hidden md:block' href=''>
                  tickitz.id
                </a>
              </div>

              <div className='md:flex md:gap-[15px]'>
                <img src={tweet} alt='' />
                <a className='hidden md:block' href=''>
                  tickitz.id
                </a>
              </div>

              <div className='md:flex md:gap-[15px]'>
                <img src={youtube} alt='' />
                <a className='hidden md:block' href=''>
                  Tickitz Cinema id
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className='my-[64px] text-[#6E7191] font-["Mulish",sans-serif] font-[400] text-[13px] md:text-center md:my-[50px]'>
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </section>
    </>
  );
}

export default Footer;
