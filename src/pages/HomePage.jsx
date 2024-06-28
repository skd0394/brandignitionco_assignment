import NavigationContainer from "../components/NavigationContainer";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const HomePage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start gap-[13px] leading-[normal] tracking-[normal]">
      <NavigationContainer />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full">
        <div className="w-[1189px] flex flex-col items-start justify-start gap-[6px] max-w-full">
          <AboutMe />
          <Skills />
        </div>
      </section>
      <Projects />
      <Contacts />
      <footer className="ml-[-3px] self-stretch flex flex-row items-start justify-start relative max-w-[102%] shrink-0 text-center text-xl text-white font-section-title">
        <img
          className="h-[444px] flex-1 relative max-w-full overflow-hidden"
          alt=""
          src="/wave.svg"
        />
        <div className="w-[1183.2px] !m-[0] absolute bottom-[175px] left-[calc(50%_-_591.6px)] flex flex-row items-center justify-between py-0 px-[110px] box-border gap-[20px] max-w-full z-[1] mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[315px] flex flex-col items-start justify-start gap-[34px]">
            <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-base">
              My social media links:
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
              <img
                data-aos="fade-down-right"
                data-aos-delay="20"
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/linkedinsvgrepocom-1.svg"
              />
              <img
                data-aos="fade-down-right"
                data-aos-delay="200"
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/whatsappsvgrepocom-1.svg"
              />
              <img
                data-aos="fade-down-right"
                data-aos-delay="400"
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/twittersvgrepocom-1.svg"
              />
              <img
                data-aos="fade-down-right"
                data-aos-delay="600"
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="lazy"
                alt=""
                src="/gmailsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[19px]">
            <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-base">
              More projects I’ve worked on
            </h1>
            <div className="flex flex-row items-center justify-center py-0 px-[21px] gap-[22px] text-left text-lg text-snow mq750:flex-wrap">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/githubsvgrepocom-1.svg"
              />
              <div className="relative leading-[27px]">
                <span>@</span>
                <a href="https://github.com/skd0394" className="[text-decoration:none]">
                  <span className="text-mediumturquoise">skd0394</span>
                </a>
                <span> on github</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
