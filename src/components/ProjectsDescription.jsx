import Challenge from "./Challenge";
import PropTypes from "prop-types";

const ProjectsDescription = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-base text-gray-500 font-section-title ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[25px]">
        <h2 className="m-0 relative text-inherit font-normal font-inherit">
          Some of my projects include:
        </h2>
      </div>
      <Challenge
        shape="/rectangle-51@2x.png"
        blueMercuryIsASkincarePro="Blue mercury is a skincare product E commerce website which gives you wide varieties of branded skincare , makeup care and many more products."
      />
    </div>
  );
};

ProjectsDescription.propTypes = {
  className: PropTypes.string,
};

export default ProjectsDescription;
