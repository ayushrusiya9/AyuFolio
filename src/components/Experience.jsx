import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import SectionHeading from "./SectionHeading";
import GridLayout from "./GridLayout";
import Card from "./Card";

const experienceData = [
  {
    company: "Eulogik",
    role: "Software Developer",
    period: "Jan 2026 - Present",
    description: ` Developed backend services using python and FastAPI for production level applications,
                   Designed and implemented REST APIs, authentication systems, and core business logic,
                   Worked with PostgreSQL/MySQL for database design, queries, and data handling,
                   Built and integrated frontend components using React.js and Next.js with backend APIs, 
                   Contributed to full stack development, ensuring smooth communication between frontend and backend systems.`
  },
  {
    company: "Cybrom Technology Pvt. Ltd., Bhopal",
    role: "Full Stack Developer Intern",
    period: "Sep 2025 - Dec 2025",
    description: ` Developed backend APIs using Django and Django REST Framework for real world web applications,
                  Implemented authentication, CRUD operations, and API routing for structured backend systems,
                  Integrated frontend components using React.js with backend APIs, 
                  Worked with relational databases and handled data models and relationships, 
                  Followed clean code practices and collaborated using Git and GitHub.`
  }
];

const Experience = () => {
  return (
    <div
      name="Experience"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black to-black "
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading heading="Experience" secondHeading="My professional journey" />
        </AnimatedWrapper>
        <GridLayout style="flex flex-col gap-4 mt-8">
          {experienceData.map((exp, idx) => (
            <AnimatedWrapper key={idx} animateFrom="bottom" delay={0.8}>
              <Card style={{ shadow: 'shadow-cyan-500/30' }}>
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
