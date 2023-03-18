import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import Accordion from "./Accordion";
const Tutors = () => {
  return (
    <div className="section" id="tutors">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become a <span className="text-primary">Tutor</span> <br /> at The
            Study Spot
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Are you passionate about helping students succeed in their academic
            pursuits? Do you have a strong academic background and teaching
            experience? If so, consider becoming a tutor at The Study Spot. As a
            tutor at The Study Spot, you will have the opportunity to work with
            K-12 students and help them achieve their academic goals. We are
            looking for experienced tutors who are passionate about teaching and
            have a track record of success in their subject areas. Our tutors
            use interactive and engaging teaching methods to help students build
            their skills and confidence and make learning fun and accessible. If
            you are interested in joining our team of dedicated tutors, please
            visit our website to learn more about our application process. We
            look forward to hearing from you!
          </p>
          <button className="py-3 px-4 bg-primary text-white rounded-lg text-sm font-bold">
            Start Tutoring
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="Teacher Graphic" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Grow <span className="text-primary">Together</span> <br /> at The
            Study Spot
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            At The Study Spot, we believe in fostering a community of growth and
            learning, both for our students and our tutors. As a tutor at The
            Study Spot, you will have the opportunity to work with a diverse
            group of students and collaborate with other experienced tutors to
            develop your teaching skills and enhance your knowledge of various
            subjects. We provide ongoing training and support to our tutors to
            ensure that they are equipped with the latest teaching techniques
            and strategies. Additionally, we offer competitive compensation and
            flexible scheduling to ensure that our tutors have a rewarding and
            fulfilling experience. Join us at The Study Spot and grow together
            with our community of dedicated tutors and students.
          </p>
          <button className=" text-primary text-sm font-bold hover:underline">
            Benefits
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="Teacher Graphic" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-primary">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        <Accordion
          id={1}
          title="What qualifications do your tutors have?"
          content="Our tutors are experienced professionals with a passion for teaching and helping students succeed. They have a strong academic background and a track record of success in their subject areas."
        />
        <Accordion
          id={2}
          title="How does online tutoring work??"
          content="Our online tutoring sessions take place over a secure video conferencing platform. Students and tutors can communicate and share materials in real-time, making it easy to get the help and support they need."
        />
        <Accordion
          id={3}
          title="What if I need to reschedule a tutoring session?"
          content="We understand that schedules can change, and we are happy to accommodate rescheduling requests whenever possible. Simply contact your tutor to arrange a new time."
        />
        <Accordion
          id={4}
          title="What is the cost of tutoring?"
          content="Our tutoring services are competitively priced, and we offer flexible pricing options to meet each student's unique needs."
        />
      </div>
    </div>
  );
};

export default Tutors;
