import React from "react";
import about from "../../assets/About.png";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-primary">online tutoring</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Welcome to The Study Spot, your go-to destination for exceptional
            online tutoring services for K-12 students. At The Study Spot, we
            are committed to providing top-notch academic support to students,
            and we are proud to have a team of experienced tutors who are
            dedicated to helping students achieve their academic goals. Our
            tutors use interactive and engaging teaching methods to make
            learning fun and accessible, and we are passionate about seeing our
            students succeed. Whether you need help with homework, test
            preparation, or general academic support, we are here to help. Join
            us today and experience the difference of personalized, online
            tutoring from The Study Spot.
          </p>
          <button className="py-3 px-6 text-sm hover:bg-primary border border-solid border-gray rounded-lg font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
