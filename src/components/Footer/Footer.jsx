import React from "react";
import Iframe from 'react-iframe'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl ">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p className="text-2xl  text-secondary">Global</p>
                <p className="text-2xl text-red-600">Tech</p>
              </div>
              <p>
              <b>Global Tech Computer Education -</b> 
              The success of Indian firms and professionals in the technology (IT) arena during the last decade has been spectacular. Global Tech Computer education has been established keeping in view all above facts.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className="grid">
            
            <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-center text-justify mb-5">
                Get in touch!
                </h1>
                <div>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1482857843434!2d80.25196437509872!3d13.089787112275994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bdd7fd6161%3A0xc848e6db0751073c!2sGlobal%20Tech%20Computer%20Education%20Institute%20Purasawalkam%20in%20Chennai%2C%20Tally%2C%20Python%2C%20Java%2C%20UI%20%2F%20UX%2C%20Data%20Science%2C%20DTP%2C%20SAP!5e0!3m2!1sen!2sin!4v1732535800288!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
              </div>

              
              
              
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                {" "}
                @copyright 2023 Global Tech Computer Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
