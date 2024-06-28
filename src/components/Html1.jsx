import { useMemo } from "react";
import PropTypes from "prop-types";

const Html1 = ({
  className = "",
  polygon1,
  javascript1,
  javaScript,
  propPadding,
  propWidth,
  propFlex,
  dataos,
  propGap,
  dataosdelay
}) => {
  const html51Style = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
      flex: propFlex,
      dataos,
      dataosdelay
      
    };
  }, [propPadding, propWidth, propFlex,propGap]);

  return (
    <div
      className={`w-[127px] flex flex-col items-end justify-start gap-[1px] text-center text-base text-black font-section-title ${className}`}
      style={html51Style}
      data-aos={dataos}
      data-aos-delay={dataosdelay}
    >
      <div className="self-stretch h-[129px] flex flex-row items-start justify-start relative">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
            alt=""
            src={polygon1}
          />
          <img
            className="absolute h-[calc(100%_-_24.7px)] top-[10.4px] bottom-[14.3px] left-[21.1px] max-h-full w-[85.6px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={javascript1}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-4">
        <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-inherit">
          {javaScript}
        </h2>
      </div>
    </div>
  );
};

Html1.propTypes = {
  className: PropTypes.string,
  polygon1: PropTypes.string,
  javascript1: PropTypes.string,
  javaScript: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Html1;
