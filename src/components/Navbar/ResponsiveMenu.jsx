import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram , FaPhone,FaFacebookF} from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";


const iconList = [
  { icon: <FaFacebookF /> },
  { icon: <FaTwitter /> },
  { icon: <FaLinkedinIn /> },
  { icon: <FaInstagram /> },
  { icon: <FaPhone /> },
];
const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            <ul className="flex text-white gap-6 items-center cursor-pointer">
                            {iconList.map((item, index) => (
                              <div className="hover:text-secondary transition-all duration-300 font-semibold" key={index}>{item.icon}</div>
                            ))}
              </ul>
                            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
