import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import SectionHeading from "./SectionHeading";
import GridLayout from "./GridLayout";
import Card from "./Card";

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
        <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 gap-4">
          {experienceData.map((exp, idx) => (
            <AnimatedWrapper key={idx} animateFrom="bottom" delay={0.8}>
              <Card style={{shadow:'shadow-cyan-500/30'}}>
                <div className="flex flex-col h-full p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">{exp.role}</h3>
                  <span className="text-lg text-white font-semibold mb-1">@ {exp.company}</span>
                  <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-200 text-sm">{exp.description}</p>
                </div>
              </Card>
            </AnimatedWrapper>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default Experience;
