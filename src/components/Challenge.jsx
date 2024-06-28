import PropTypes from "prop-types";

const Challenge = ({ className = "", shape, blueMercuryIsASkincarePro }) => {
  return (
    <div
      className={`self-stretch bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[6.5px] text-center text-mini text-gray-500 font-section-title border-[2px] border-solid border-gradient ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
        <img
          className="h-[170px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={shape}
        />
      </div>
      <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
        {blueMercuryIsASkincarePro}
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-7 text-3xs text-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10.5px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[52px]">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="w-8 flex flex-col items-end justify-start">
                <img
                  className="w-8 h-8 relative object-cover shrink-0"
                  loading="lazy"
                  alt=""
                  src="/html5-1-11@2x.png"
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
                    src="/css3-1-11@2x.png"
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
                    loading="lazy"
                    alt=""
                    src="/javascript-1-11@2x.png"
                  />
                  <div className="relative font-semibold inline-block min-w-[52px] z-[1]">
                    JavaScript
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
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
    </div>
  );
};

Challenge.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  blueMercuryIsASkincarePro: PropTypes.string,
};

export default Challenge;
