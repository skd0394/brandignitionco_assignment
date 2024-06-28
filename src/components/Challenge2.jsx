import PropTypes from "prop-types";

const Challenge2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-darkslategray-200 flex flex-col items-end justify-start pt-0 px-0 pb-3 gap-[5.8px] text-center text-mini text-gray-500 font-section-title border-[2px] border-solid border-gradient ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
        <img
          className="h-[170px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5-21@2x.png"
        />
      </div>
      <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
        Apple Inc. (formerly Apple Computer Inc.) is an American company famous
        for creating iPhone, iPad and Macintosh computers.
      </h3>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[51px] pl-[54px] text-left text-3xs text-white">
        <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
          <div className="w-[74px] flex flex-row items-start justify-start gap-[5px] text-center">
            <div className="flex-1 flex flex-col items-end justify-start">
              <img
                className="w-8 h-8 relative object-cover shrink-0"
                loading="lazy"
                alt=""
                src="/html5-1-31@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0.5 mt-[-3.5px]">
                <div className="flex-1 relative font-semibold inline-block min-w-[29px] shrink-0">
                  React
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[37px] h-7 flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border">
                <img
                  className="h-[29px] w-[29px] relative object-cover shrink-0"
                  loading="lazy"
                  alt=""
                  src="/css3-1-31@2x.png"
                />
              </div>
              <div className="self-stretch relative leading-[12px] font-semibold inline-block min-w-[37px] shrink-0">
                Node.js
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[27.5px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-8 w-[35.7px] absolute !m-[0] top-[-27.5px] left-[5.1px] object-cover"
                loading="lazy"
                alt=""
                src="/javascript-1-31@2x.png"
              />
              <div className="relative font-semibold inline-block min-w-[52px] z-[1]">
                Express.js
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[27.5px] flex flex-row items-start justify-start py-0 pr-[11px] pl-[5px] box-border">
              <img
                className="h-8 w-[35.7px] relative object-cover shrink-0"
                loading="lazy"
                alt=""
                src="/javascript-1-41@2x.png"
              />
            </div>
            <div className="relative font-semibold shrink-0">MongoDB</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[30px] pl-7">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
          <button className="cursor-pointer pt-[0.5px] px-[18px] pb-[5.5px] bg-darkslateblue h-[27px] w-[93px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white">
            <div className="mt-[-1px] relative text-mini font-medium font-section-title text-tomato text-center inline-block min-w-[29px]">
              Live
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrow.svg"
            />
          </button>
          <button className="cursor-pointer pt-[0.5px] px-[5px] pb-[5.5px] bg-darkslateblue h-[27px] w-[88px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white">
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

Challenge2.propTypes = {
  className: PropTypes.string,
};

export default Challenge2;
