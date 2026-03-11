import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import SectionHeading from "./SectionHeading";

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "Jan 2024 - Dec 2025",
    description: "Developed and maintained responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to deliver seamless user experiences."
  },
  {
    company: "InnovateX",
    role: "Backend Developer",
    period: "Feb 2023 - Dec 2023",
    description: "Built RESTful APIs with Django and FastAPI. Optimized database queries and implemented authentication systems."
  }
];

const Experience = () => {
  return (
    <div
      name="Experience"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading heading="Experience" secondHeading="My professional journey" />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div className="py-2 xs:p-4 rounded-lg bg-gray-900">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="mb-6 p-4 rounded-lg bg-gray-800 shadow-md">
                <h3 className="text-xl font-bold text-cyan-300">{exp.role} <span className="text-white">@ {exp.company}</span></h3>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Experience;
