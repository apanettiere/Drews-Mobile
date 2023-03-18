import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">Contact Us</div>
        <p className="text-sm leading-7 text-gray">
          If you have any questions, comments, or concerns regarding our online
          tutoring services for K-12 students, please do not hesitate to reach
          out to us. Our friendly and knowledgeable team is available to assist
          you via email at support@thestudyspot.com. We strive to respond to all
          inquiries as quickly as possible and provide the best possible
          customer service experience. Thank you for choosing The Study Spot as
          your partner in academic success!
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm text-white bg-primary sm:p-3 p-2 shadow-md font-bold">
            Contact Us
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
