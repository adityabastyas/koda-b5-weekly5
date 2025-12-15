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
      <section className="px-[24px] py-[64px] md:px-[130px]">
        <div className="gap-14 md:grid md:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="flex-col md:flex">
            <div>
              <img className="" src={logo} alt="" />
            </div>
            <p className="mt-[12px] mb-[40px] font-['Mulish',sans-serif] text-[14px] font-normal text-[#6E7191] md:mt-[16px] md:text-[16px]">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div>
            <p className="mb-[12px] font-['Mulish',sans-serif] text-[16px] font-[600] text-[#000000]">
              Explore
            </p>
            <div className='mb-[48px] grid grid-cols-3 font-["Mulish",sans-serif] text-[14px] font-normal text-[#6E7191] md:flex md:flex-col'>
              <p className="">Cinemas</p>
              <p className="">Movies List</p>
              <p>Notification</p>
              <p className="pt-[12px]">My Ticket</p>
            </div>
          </div>

          <div className="mb-[48.5px]">
            <div>
              <p className="mb-[16px] font-['Mulish',sans-serif] text-[16px] font-[600] text-[#000000]">
                Our Sponsor
              </p>
              <div className="flex items-center items-start gap-[24px] overflow-hidden md:flex-col">
                <img className="h-[45px]" src={evb} alt="" />
                <img className="h-[28px]" src={cineone} alt="" />
                <img className="h-[26px]" src={hiflik} alt="" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-[16px] font-['Mulish',sans-serif] text-[16px] font-[600] text-[#000000]">
              Follow us
            </p>
            <div className="flex gap-[32px] md:flex-col">
              <div className="md:flex md:gap-[15px]">
                <img src={facebook} alt="" />
                <a className="hidden md:block" href="">
                  Tickitz Cinema id
                </a>
              </div>

              <div className="md:flex md:gap-[15px]">
                <img src={instagram} alt="" />
                <a className="hidden md:block" href="">
                  tickitz.id
                </a>
              </div>

              <div className="md:flex md:gap-[15px]">
                <img src={tweet} alt="" />
                <a className="hidden md:block" href="">
                  tickitz.id
                </a>
              </div>

              <div className="md:flex md:gap-[15px]">
                <img src={youtube} alt="" />
                <a className="hidden md:block" href="">
                  Tickitz Cinema id
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className='my-[64px] font-["Mulish",sans-serif] text-[13px] font-[400] text-[#6E7191] md:my-[50px] md:text-center'>
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </section>
    </>
  );
}

export default Footer;
