import Nav from "./Nav";
import PropTypes from "prop-types";

const NavigationContainer = ({ className = "" }) => {
  return (
    <section
      className={`w-[100%] flex flex-row items-start justify-start pt-0 px-px pb-[42px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <Nav />
    </section>
  );
};

NavigationContainer.propTypes = {
  className: PropTypes.string,
};

export default NavigationContainer;
