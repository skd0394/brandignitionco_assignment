import ProjectContent1 from "./ProjectContent1";
import PropTypes from "prop-types";

const Challenge1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[5px] border-[2px] border-solid border-gradient ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
        <img
          className="h-[170px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5-11@2x.png"
        />
      </div>
      <ProjectContent1
        html51="/html5-1-21@2x.png"
        css31="/css3-1-21@2x.png"
        javascript1="/javascript-1-21@2x.png"
        propFlex="unset"
        propGap="9.3px"
        propAlignSelf="stretch"
      />
    </div>
  );
};

Challenge1.propTypes = {
  className: PropTypes.string,
};

export default Challenge1;
