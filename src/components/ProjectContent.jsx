import { useMemo } from "react";
import PropTypes from "prop-types";

const ProjectContent = ({
  className = "",
  Intro,
  html51,
  css31,
  javascript1,
  propWidth,
  propFlex,
}) => {
  const projectContentStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={`w-[375px] flex flex-col items-end justify-start gap-[21.8px] max-w-full text-center text-mini text-gray-500 font-section-title ${className}`}
      style={projectContentStyle}
    >
      <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
        {Intro}
      </h3>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-3xs text-white">
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <div className="w-8 flex flex-col items-end justify-start">
            <img
              className="w-8 h-8 relative object-cover shrink-0"
              alt=""
              src={html51}
            />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0.5 mt-[-3.5px]">
              <div className="flex-1 relative font-semibold inline-block min-w-[29px] shrink-0">
                HTML
              </div>
            </div>
          </div>
          <div className="w-[33px] flex flex-col items-end justify-start">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
              <img
                className="mb-[-0.5px] h-[29px] w-[29px] relative object-cover shrink-0"
                alt=""
                src={css31}
              />
            </div>
            <div className="self-stretch relative font-semibold shrink-0">
              <p className="m-0">CSS</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[27.5px] px-0 pb-0 text-left">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-8 w-[35.7px] absolute !m-[0] top-[-27.5px] left-[5.1px] object-cover"
                alt=""
                src={javascript1}
              />
              <div className="relative font-semibold inline-block min-w-[52px] z-[1]">
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[363px] flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
          <button
            onClick={() => {
              window.open("https://monumental-cassata-c694c6.netlify.app/");
            }}
            className="cursor-pointer pt-[0.5px] px-[18px] pb-[5.5px] bg-darkslateblue h-[27px] w-[93px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white hover:bg-steelblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro"
          >
            <div className="mt-[-1px] relative text-mini font-medium font-section-title text-tomato text-center inline-block min-w-[29px]">
              Live
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrow.svg"
            />
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/skd0394/Bluemercury.com");
            }}
            className="cursor-pointer pt-[0.5px] px-[5px] pb-[5.5px] bg-darkslateblue h-[27px] w-[88px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white hover:bg-steelblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro"
          >
            <div className="mt-[-1px] relative text-mini font-medium font-section-title text-tomato text-center inline-block min-w-[50px]">
              GitHub
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrow.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectContent.propTypes = {
  className: PropTypes.string,
  blueMercuryIsASkincarePro: PropTypes.string,
  html51: PropTypes.string,
  css31: PropTypes.string,
  javascript1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default ProjectContent;
