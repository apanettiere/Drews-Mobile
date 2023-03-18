import React from "react";
import { categories } from "../../../Data";
import Categories from "./Categories";
import { motion } from "framer-motion";

const Subjects = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="section" id="subjects">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-primary">Subjects</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          At The Study Spot, we offer online tutoring services for K-12 students
          in a wide range of subjects, including mathematics, reading, science,
          and coding. Our experienced tutors are passionate about helping
          students achieve their academic goals and provide personalized support
          to meet each student's unique needs. Whether you need help with
          algebra, geometry, reading comprehension, biology, chemistry, or
          coding, our tutors are here to help. We use interactive and engaging
          teaching methods to help students build their skills and confidence in
          each subject. With our online tutoring services, students can get the
          help they need to excel in their academic pursuits and achieve success
          in their future endeavors. Join us today and experience the difference
          that personalized online tutoring can make!
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </div>
  );
};

export default Subjects;
