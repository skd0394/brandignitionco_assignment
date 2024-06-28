import ProjectContent from "./ProjectContent";
import PropTypes from "prop-types";

const Projects = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[51px] box-border max-w-[102%] shrink-0 text-left text-13xl text-tomato font-section-title lg:pb-[33px] lg:box-border mq750:pb-[21px] mq750:box-border ${className}`}
    >
      <div
        data-scroll-to="projectsSectionContainer"
        className="flex-1 bg-navy-blue flex flex-col items-center justify-start pt-[40.5px] px-5 pb-[86.5px] box-border gap-[38px] max-w-full z-[1] lg:pt-[26px] lg:pb-14 lg:box-border mq750:pt-5 mq750:pb-9 mq750:box-border mq450:gap-[19px]"
      >
        <div className="w-[864px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-[47px] w-[42px] relative overflow-hidden shrink-0 min-h-[47px]"
              loading="lazy"
              alt=""
              src="/gearssvgrepocom-2.svg"
            />
            <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block [text-shadow:1px_2px_4px_rgba(0,_0,_0,_0.25)] min-w-[125px] mq450:text-lgi mq1050:text-7xl">
              Projects
            </h1>
          </div>
        </div>
        <div className="w-[863px] flex flex-col items-start justify-start gap-[44px] max-w-full text-center text-mini text-gray-500 mq450:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[60px] max-w-full mq1050:flex-wrap mq1050:gap-[30px]">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-[409px] rounded-tl-6xl rounded-tr-none rounded-br-6xl rounded-bl-none bg-darkslategray-100 box-border flex flex-col items-start justify-start pt-5 px-[13px] pb-[9px] gap-[31px] min-w-[410px] max-w-full shrink-0 border-[4px] border-solid border-gradient mq750:min-w-full mq450:gap-[15px] mq1050:flex-1"
            >
              <img
                className="ml-[-13.5px] w-[402px] relative max-h-full object-cover max-w-[108%] shrink-0"
                loading="lazy"
                alt=""
                src="/rectangle-5@2x.png"
              />
              <ProjectContent
                Intro="Blue mercury is a skincare product E commerce website which gives you wide varieties of branded skincare , makeup care and many more products."
                html51="/html5-1-1@2x.png"
                css31="/css3-1-1@2x.png"
                javascript1="/javascript-1-1@2x.png"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="w-[410px] rounded-tl-none rounded-tr-6xl rounded-br-none rounded-bl-6xl bg-darkslategray-100 box-border flex flex-col items-start justify-start pt-5 px-0 pb-[9px] gap-[31px] min-w-[410px] max-w-full shrink-0 border-[4px] border-solid border-gradient mq750:min-w-full mq450:gap-[15px] mq1050:flex-1"
            >
              <img
                className="self-stretch h-[251px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/rectangle-5-1@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[13px] box-border max-w-full">
                <ProjectContent
                  Intro={
                    "Sunglow Fashion is an e-commerce platform to buy clothes,beauty & Wellness,fashion,furniture and jewellery,etc."
                  }
                  html51="/html5-1-2@2x.png"
                  css31="/css3-1-2@2x.png"
                  javascript1="/javascript-1-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="self-stretch flex flex-row items-start justify-center gap-[60px] max-w-full mq1050:flex-wrap mq1050:gap-[30px]"
          >
            <div className="w-[409px] rounded-tl-none rounded-tr-6xl rounded-br-none rounded-bl-6xl bg-darkslategray-100 box-border flex flex-col items-start justify-start pt-5 px-0 pb-[16.5px] gap-[31px] min-w-[410px] max-w-full shrink-0 border-[4px] border-solid border-gradient mq750:min-w-full mq450:gap-[15px] mq1050:flex-1">
              <img
                className="self-stretch h-[243.5px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/rectangle-5-2@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[13px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start gap-[21.8px] max-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
                    Apple Inc. (formerly Apple Computer Inc.) is an American
                    company famous for creating iPhone, iPad and Macintosh
                    computers.
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px] text-3xs text-white">
                    <div className="w-[188px] flex flex-col items-start justify-start">
                      <div className="w-[176.8px] flex flex-row items-start justify-start relative">
                        <img
                          className="h-full w-[35.7px] absolute !m-[0] top-[0px] right-[57px] bottom-[0px] max-h-full object-cover"
                          alt=""
                          src="/javascript-1-3@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <div className="flex flex-row items-start justify-start gap-[8.5px]">
                            <img
                              className="h-8 w-8 relative object-cover min-h-[32px]"
                              alt=""
                              src="/html5-1-3@2x.png"
                            />
                            <img
                              className="h-[29px] w-[29px] relative object-contain"
                              alt=""
                              src="/css3-1-3@2x.png"
                            />
                          </div>
                          <img
                            className="h-8 w-[35.7px] relative object-cover min-h-[32px]"
                            alt=""
                            src="/javascript-1-4@2x.png"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 mt-[-4.5px]">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px]">
                          <div className="w-[29px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                            <div className="self-stretch relative font-semibold inline-block min-w-[29px]">
                              React
                            </div>
                          </div>
                          <div className="w-[37px] relative leading-[12px] font-semibold inline-block shrink-0 min-w-[37px]">
                            Node.js
                          </div>
                          <div className="flex-1 relative font-semibold text-left inline-block min-w-[52px] z-[1]">
                            Express.js
                          </div>
                          <div className="flex-1 relative font-semibold text-left">
                            MongoDB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[363px] flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                      <button
                        onClick={() => {
                          window.open("https://blueapple.vercel.app/");
                        }}
                        className="cursor-pointer pt-[0.5px] px-[18px] pb-[5.5px] bg-darkslateblue h-[27px] w-[93px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white hover:bg-steelblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro"
                      >
                        <div className="mt-[-1px] relative text-mini font-medium font-section-title text-tomato text-center inline-block min-w-[29px]">
                          Live
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/arrow.svg"
                        />
                      </button>
                      <button
                        onClick={() => {
                          window.open("https://github.com/skd0394/Apple-Clone");
                        }}
                        className="cursor-pointer pt-[0.5px] px-[5px] pb-[5.5px] bg-darkslateblue h-[27px] w-[88px] rounded box-border flex flex-row items-start justify-start gap-[4px] border-[2px] border-solid border-white hover:bg-steelblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro"
                      >
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
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="w-[410px] rounded-tl-6xl rounded-tr-none rounded-br-6xl rounded-bl-none bg-darkslategray-100 box-border flex flex-col items-start justify-start pt-5 px-0 pb-[9px] gap-[31px] min-w-[410px] max-w-full shrink-0 border-[4px] border-solid border-gradient mq750:min-w-full mq450:gap-[15px] mq1050:flex-1"
            >
              <img
                className="self-stretch h-[251px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/rectangle-5-3@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[13px] box-border max-w-full">
                <ProjectContent
                  Intro="Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve goals"
                  html51="/html5-1-4@2x.png"
                  css31="/css3-1-4@2x.png"
                  javascript1="/javascript-1-5@2x.png"
                  propWidth="unset"
                  propFlex="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
