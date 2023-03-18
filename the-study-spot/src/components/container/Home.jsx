import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-sm mb-4 mt-3 ">
            {" "}
            Welcome to the study spot
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            The best <br /> online tutoring <br /> for your child.
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Our experienced tutors use interactive and engaging teaching methods
            to help students achieve their academic goals.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-primary bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
           
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We provide online tutoring services for {" "}
          <span className="text-primary">
             K-12 
          </span>
          {" "}
           students.
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-6"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
