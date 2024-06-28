import PropTypes from "prop-types";

const Contacts = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[34px] pr-5 pl-[41px] box-border max-w-full text-left text-13xl text-red font-section-title ${className}`}
    >
      <div
        className="w-[1121px] flex flex-col items-center justify-start py-0 px-0 box-border gap-[30px] max-w-full"
        data-scroll-to="contactSectionContainer"
      >
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block [text-shadow:1px_2px_4px_rgba(0,_0,_0,_0.25)] min-w-[125px] mq450:text-lgi mq1050:text-7xl">
          Contact
        </h1>
        <div className="w-[1153px] flex flex-row items-center justify-start py-0 pr-14 pl-0 box-border gap-[65px] max-w-[103%] shrink-0 lg:gap-[32px] lg:pr-7 lg:box-border mq750:gap-[16px] mq1050:flex-wrap">
          <img
            data-aos="fade-right"
            data-delay="300"
            className="w-[508px] relative max-h-full overflow-hidden shrink-0 max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/man-standing-on-chats-1.svg"
          />
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="h-[294px] flex-1 flex flex-col items-center justify-start py-5 px-0 box-border gap-[43px] min-w-[341px] max-w-full mq750:gap-[21px] mq750:min-w-full"
          >
            <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_2px_1px_rgba(0,_0,_0,_0.12),_0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded bg-white flex flex-row items-start justify-start py-2.5 px-[18px] border-[1px] border-solid border-outline">
              <input
                data-aos="fade-down"
                data-aos-delay="200"
                className="w-[133px] [border:none] [outline:none] font-section-title text-sm bg-[transparent] h-[29px] relative leading-[29px] text-gray-300 text-left flex items-end p-0"
                placeholder="Enter email address"
                type="text"
              />
            </div>
            <textarea
              data-aos="fade-down"
              data-aos-delay="400"
              className="bg-white h-[158px] w-auto [outline:none] self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_2px_1px_rgba(0,_0,_0,_0.12),_0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded box-border flex flex-row items-start justify-start py-[11px] px-[19px] font-section-title text-sm text-gray-300 shrink-0 border-[1px] border-solid border-gray-600"
              placeholder="Enter message..."
              rows={8}
              cols={26}
            />
            <button className="cursor-pointer [border:none] py-3 px-6 bg-navy-blue rounded flex flex-row items-center justify-center gap-[20px] whitespace-nowrap hover:bg-steelblue-100">
              <div className="relative text-lg font-section-title text-gray-100 text-center inline-block min-w-[124px]">
                Send Message
              </div>
              <img
                className="h-6 w-[21.5px] relative object-contain"
                alt=""
                src="/paper-plane-1@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Contacts.propTypes = {
  className: PropTypes.string,
};

export default Contacts;
