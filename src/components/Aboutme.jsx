import PropTypes from "prop-types";
import Resume from "../../assets/Shivkant-Dubey-Resume.pdf"
const AboutMe = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full text-left text-lg text-navy-blue font-section-title ${className}`}
    >
      <div
        className="flex-1 flex flex-row items-start justify-start py-[53px] pr-4 pl-0 box-border gap-[180px] max-w-full z-[1] lg:gap-[90px] mq750:gap-[45px] mq750:pt-[34px] mq750:pb-[34px] mq750:box-border mq450:gap-[22px] mq1050:flex-wrap"
        data-scroll-to="topContainer"
      >
        <div className=" fade-in-slide-right flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[385px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="h-24 relative tracking-[0.18px] leading-[117.6%] font-semibold inline-block text-13xl mq450:text-lgi mq450:leading-[34px] mq1050:text-7xl mq1050:leading-[45px]">
              <p className="m-0">
                <span>
                  <span className="capitalize">{`Hi👋, I’m `}</span>a
                </span>
              </p>
              <p className="m-0 text-29xl capitalize">
                Full stack Web developer
              </p>
            </div>
            <h2 className="m-0 w-[553px] relative text-inherit font-normal font-inherit text-gray-400 inline-block max-w-full">
              Logical and result-driven full-stack developer dedicated to
              building user-focused websites. An analytical problem solver with
              a calm and focused mindset. Technically Proficient in React,
              JavaScript, HTML, CSS etc...
            </h2>
            <a
              href={Resume}
              download={"Shivkant-Dubey-Resume"}
              className="[text-decoration:none]"
            >
              <div
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1-mavXJADg6YAZ238dOZnevFlbx6RsWay/view?usp=share_link"
                  );
                }}
                className="flex flex-row items-start justify-start text-center text-white"
              >
                <div className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_3px_1px_rgba(0,_0,_0,_0.12),_0px_1px_5px_rgba(0,_0,_0,_0.2)] rounded bg-red flex flex-row items-start justify-start py-2 px-4">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[69px]">
                    Resume
                  </h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="fade-in-slide-left  w-[386px] flex flex-col items-end justify-start gap-[193.4px] min-w-[386px] max-w-full mq750:min-w-full mq450:gap-[97px] mq1050:flex-1">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full mq1050:flex-1">
              <img
                className="h-[250px] w-[251.1px] absolute !m-[0] right-[56.1px] bottom-[-209.4px] rounded-31xl object-cover"
                loading="lazy"
                alt=""
                src="/sample-user-1@2x.png"
              />
              <div className="flex-1 flex flex-row items-start justify-between pt-3 px-0 pb-0 box-border relative max-w-full gap-[20px] mq450:flex-wrap">
                <img
                  className="h-[98.6px] w-[43px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/zigzags@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                  <img
                    className="w-[46.1px] h-[40.5px] relative"
                    loading="lazy"
                    alt=""
                    src="/cube.svg"
                  />
                </div>
                <img
                  className="h-[27px] w-[29.9px] absolute !m-[0] top-[0px] left-[148.5px]"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[363.6px] flex flex-row items-end justify-between max-w-full gap-[20px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[22.4px]">
              <div className="w-[24.6px] h-[21.6px] relative rounded-[50%] box-border border-[0px] border-solid border-slateblue" />
            </div>
            <div className="h-[76px] w-[136.4px] relative overflow-hidden shrink-0 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[0px] left-[48px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[0px] left-[96px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[0px] left-[144px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[0px] left-[192px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[27px] left-[0px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[27px] left-[48px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[27px] left-[96px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[27px] left-[144px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[27px] left-[192px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[54px] left-[0px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[54px] left-[48px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[54px] left-[96px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[54px] left-[144px] rounded-[50%] bg-red w-[15px] h-[15px]" />
              <div className="absolute top-[54px] left-[192px] rounded-[50%] bg-red w-[15px] h-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
};

export default AboutMe;
