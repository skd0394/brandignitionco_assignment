import { useMemo } from "react";
import PropTypes from "prop-types";

const ProjectContent1 = ({
  className = "",
  html51,
  Intro,
  css31,
  javascript1,
  propFlex,
  propGap,
  propAlignSelf,
}) => {
  const projectContent1Style = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[21.8px] max-w-full text-center text-mini text-gray-500 font-section-title ${className}`}
      style={projectContent1Style}
    >
      <h3 className="m-0 w-[375px] relative text-inherit font-normal font-inherit flex items-center justify-center max-h-[66px] [word-break:break-word]">{Intro}</h3>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[30px] text-3xs text-white">
        <div className="w-[136.7px] flex flex-row items-start justify-start gap-[5px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="self-stretch h-[28.5px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src={html51}
            />
            <div className="w-[41px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
              <div className="flex-1 relative font-semibold inline-block min-w-[35px]">
                Next.js
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
            <div className="self-stretch relative leading-[12px] font-semibold shrink-0">
              JSON
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <img
              className="w-[35.7px] h-8 relative object-cover shrink-0"
              alt=""
              src={javascript1}
            />
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-px mt-[-3.5px]">
              <div className="relative font-semibold inline-block min-w-[30px] shrink-0">
                Redux
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[363px] flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
          <button
            onClick={() => {
              window.open("https://unit-5-frontend-deployement.netlify.app/");
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
              window.open("https://github.com/ParbhatKataria1/Sunglow-Fashion");
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

ProjectContent1.propTypes = {
  className: PropTypes.string,
  html51: PropTypes.string,
  css31: PropTypes.string,
  javascript1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default ProjectContent1;
