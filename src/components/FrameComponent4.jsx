import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[29px] text-left text-lg text-navy-blue font-section-title ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[30px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] z-[1]">
          <div className="h-[50px] relative tracking-[0.18px] leading-[117.6%] font-semibold inline-block">
            <p className="m-0">
              <span>
                <span className="capitalize">{`Hi👋, I’m `}</span>a
              </span>
            </p>
            <p className="m-0 text-5xl capitalize">Full Stack Web Developer</p>
          </div>
          <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit text-gray-400">
            Logical and result-driven full-stack developer dedicated to building
            user-focused websites. An analytical problem solver with a calm and
            focused mindset. Technically Proficient in React, JavaScript, HTML,
            CSS 
          </h2>
          <button></button>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
