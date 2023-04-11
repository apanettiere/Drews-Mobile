import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: .2 }}
      className="bg-primary p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Home
            </a>
            <a href="" className="text-sm hover:underline">
              About
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Subjects
            </a>
            <a href="" className="text-sm hover:underline">
              Tutors
            </a>
          </div>
        </div>
        
        <div>
          <div className="font-bold mb-6">Contact Us</div>
          <div className="text-sm">+123456789</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
