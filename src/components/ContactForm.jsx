import PropTypes from "prop-types";

const ContactForm = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-3.5 pb-5 box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-[9px] box-border max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[43px]">
          <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_2px_1px_rgba(0,_0,_0,_0.12),_0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded bg-white flex flex-row items-start justify-start py-2.5 px-[18px] border-[1px] border-solid border-outline">
            <input
              className="w-[133px] [border:none] [outline:none] font-section-title text-sm bg-[transparent] h-[29px] relative leading-[29px] text-gray-300 text-left flex items-end p-0"
              placeholder="Enter email address"
              type="text"
            />
          </div>
          <textarea
            className="bg-white h-[158px] w-auto [outline:none] self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_2px_1px_rgba(0,_0,_0,_0.12),_0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded box-border flex flex-row items-start justify-start py-[11px] px-[19px] font-section-title text-sm text-gray-300 border-[1px] border-solid border-gray-600"
            placeholder="Enter message..."
            rows={8}
            cols={16}
          />
          <button className="cursor-pointer [border:none] py-3 px-6 bg-navy-blue rounded flex flex-row items-center justify-center gap-[20px] whitespace-nowrap">
            <div className="relative text-lg font-section-title text-gray-100 text-center inline-block min-w-[124px]">
              Send Message
            </div>
            <img
              className="h-6 w-[21.5px] relative object-contain"
              alt=""
              src="/paper-plane-11@2x.png"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
