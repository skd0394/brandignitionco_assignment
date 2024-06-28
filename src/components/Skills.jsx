import Html1 from "./Html1";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = ({ className = "" }) => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`w-[1154px] flex flex-row items-start justify-start relative max-w-full text-left text-13xl text-red font-section-title ${className}`}
    >
      <img
        className="h-[345.3px] w-[341.3px] absolute !m-[0] right-[24.2px] bottom-[-146.3px]"
        loading="lazy"
        alt=""
        src="/blob-vector.svg"
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-0 px-2.5 pb-9 box-border gap-[31px] max-w-full z-[1] mq750:gap-[15px]"
        data-scroll-to="skillsSectionContainer"
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[31px]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block [text-shadow:1px_2px_4px_rgba(0,_0,_0,_0.25)] min-w-[83px] mq450:text-lgi mq1050:text-7xl">
            Skills
          </h1>
        </div>
        <div className="flex flex-row items-start justify-center gap-[100px] max-w-full text-center text-base text-black lg:flex-wrap lg:gap-[50px] mq750:gap-[25px]">
          <div className="w-[558px] flex flex-row flex-wrap items-start justify-start gap-[15.6px_14.3px] min-w-[558px] min-h-[340px] max-w-full lg:flex-1 mq750:min-w-full">
            <div
              data-aos="fade-right"
              data-aos-delay="20"
              className="w-[127px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[0.6px]"
            >
              <div className="self-stretch h-[129px] flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/skill-icons.svg"
                  />
                  <img
                    className="absolute top-[29.5px] left-[24.5px] w-[77.8px] h-[87.5px] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/html5-1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-8">
                <h2 className="m-0 h-[32.5px] flex-1 relative text-inherit leading-[29px] font-normal font-inherit flex items-end justify-center min-w-[62.2px]">
                  HTML 5
                </h2>
              </div>
            </div>
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/css3-1@2x.png"
              javaScript="CSS"
              dataos="fade-right"
              dataosdelay="200"
            />
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/javascript-1@2x.png"
              javaScript="JavaScript"
              dataos="fade-right"
              dataosdelay="400"
            />
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/reacticon-1@2x.png"
              javaScript="React"
              propPadding="0px 0px 0.1px"
              propWidth="127px"
              propFlex="unset"
              dataos="fade-right"
              dataosdelay="600"
            />
            <div
              data-aos="fade-right"
              data-aos-delay="20"
              className="w-[127px] flex flex-col items-start justify-start gap-[0.7px]"
            >
              <div className="self-stretch h-[129px] flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/skill-icons.svg"
                  />
                  <img
                    className="absolute top-[21.7px] left-[22.2px] w-[81.1px] h-[81.9px] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/redux-1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-8">
                <h2 className="m-0 h-[32.5px] flex-1 relative text-inherit leading-[29px] font-normal font-inherit flex items-end justify-center">
                  Redux
                </h2>
              </div>
            </div>
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/mongodb-1@2x.png"
              javaScript="MongoDB"
              dataos="fade-right"
              dataosdelay="200"
            />
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/expressjs-1@2x.png"
              javaScript="Express.js"
              propWidth="127px"
              propGap="0.2px"
              propFlex="unset"
              dataos="fade-right"
              dataosdelay="400"
            />
            <Html1
              polygon1="/skill-icons.svg"
              javascript1="/node-1@2x.png"
              javaScript="Node.js"
              propWidth="127px"
              propGap="0.7px"
              propFlex="unset"
              dataos="fade-right"
              dataosdelay="600"
            />
          </div>
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-[433px] relative max-h-full overflow-hidden shrink-0 max-w-full lg:flex-1"
            alt=""
            src="/undraw-project-completed-w0oq-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
