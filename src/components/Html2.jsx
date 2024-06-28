import { useMemo } from "react";
import PropTypes from "prop-types";

const Html2 = ({
  className = "",
  polygon1,
  mongodb1,
  mongoDB,
  propWidth,
  propGap,
  propFlex,
  dataos,
  dataosdelay,
}) => {
  const html52Style = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      flex: propFlex,
      dataos,
      dataosdelay
    };
  }, [propWidth, propGap, propFlex]);

  return (
    <div
      className={`w-[127px] flex flex-col items-start justify-start gap-[0.2px] text-center text-base text-black font-section-title ${className}`}
      style={html52Style}
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
            className="absolute top-[16.1px] left-[17.8px] w-[91.1px] h-[95.3px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={mongodb1}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-3">
        <h2 className="m-0 h-[33px] flex-1 relative text-inherit leading-[29px] font-normal font-inherit flex items-end justify-center">
          {mongoDB}
        </h2>
      </div>
    </div>
  );
};

Html2.propTypes = {
  className: PropTypes.string,
  polygon1: PropTypes.string,
  mongodb1: PropTypes.string,
  mongoDB: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Html2;
