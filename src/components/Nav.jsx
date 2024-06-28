import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Resume from "../../assets/Shivkant-Dubey-Resume.pdf";

const Nav = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const onAboutMeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactMeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`w-[100%] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_2px_1px_rgba(0,_0,_0,_0.12),_0px_1px_3px_rgba(0,_0,_0,_0.2)] bg-gray-200 flex flex-row items-center justify-between py-6 px-[100px] box-border max-w-[100%] shrink-0 gap-[20px] z-[1] text-left text-11xl text-red font-section-title mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1050:pl-[50px] mq1050:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-semibold font-inherit [text-shadow:1px_2px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap">
        Shivkant Dubey
      </h1>
      <div className="hidden mq1050:block">
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div style={{display:isOpen?"flex":"none", position:"absolute", backgroundColor:"white", width:"120px",right:"20px"}}>
          <div className="flex flex-col w-[100%] h-fit max-h-[200px] text-base font-medium">
            <div className="w-full">Aboutme</div>
            <div className="w-full">Skills</div>
            <div className="w-full">Projects</div>
            <div className="w-full">ContactMe</div>
            <div className="w-full">Resume</div>
          </div>
        </div>
      </div>
      <div className="w-[600px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-between max-w-full text-lg text-black mq1050:hidden">
        <a
          className="[text-decoration:none] relative text-[inherit] inline-block min-w-[78px] cursor-pointer"
          onClick={onAboutMeTextClick}
        >
          AboutMe
        </a>
        <a
          className="[text-decoration:none] relative text-[inherit] inline-block min-w-[45px] cursor-pointer"
          onClick={onSkillsTextClick}
        >
          Skills
        </a>
        <div className="cursor-pointer flex flex-row items-center justify-center gap-[8px] text-red">
          <img
            className="h-[21.8px] w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/gearssvgrepocom-1.svg"
          />
          <a
            onClick={onProjectTextClick}
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px]"
          >
            Projects
          </a>
        </div>
        <a
          className="[text-decoration:none] relative text-[inherit] inline-block min-w-[102px] whitespace-nowrap cursor-pointer"
          onClick={onContactMeTextClick}
        >
          Contact me
        </a>
        <a
          href={Resume}
          download={"Shivkant-Dubey-Resume"}
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1-mavXJADg6YAZ238dOZnevFlbx6RsWay/view?usp=share_link"
            );
          }}
          className="[text-decoration:none] relative text-[inherit] inline-block min-w-[69px]"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
