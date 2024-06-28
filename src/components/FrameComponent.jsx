import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", reactIcon1, reactjs, propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start text-center text-base text-black font-section-title ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch h-[108px] flex flex-row items-start justify-start relative shrink-0">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
            alt=""
            src="/html-redux.svg"
          />
          <img
            className="absolute top-[27px] left-[20px] w-[66px] h-16 object-contain z-[1]"
            loading="lazy"
            alt=""
            src={reactIcon1}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-[22px] mt-[-0.2px]">
        <h2 className="m-0 h-[32.5px] flex-1 relative text-inherit leading-[29px] font-normal font-inherit flex items-end justify-center min-w-[62.2px] shrink-0 z-[1]">
          {reactjs}
        </h2>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  reactIcon1: PropTypes.string,
  reactjs: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default FrameComponent;
