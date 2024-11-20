import React from 'react';



const ImpectCounseling = () => {
  const impacts = [
    {
      id: 1,
      image: "../../src/assets/career-1.svg",
      description: "Better Career Decisions",
    },
    {
      id: 2,
      image: "../../src/assets/career-2.svg",
      description: "Guidance On Stream & Course Selection",
    },
    {
      id: 3,
      image: "../../src/assets/career-3.svg",
      description: "Knowledge On Entrance Exams & Admissions",
    },
    {
      id: 4,
      image: "../../src/assets/career-4.svg",
      description: "Reduced Anxiety",
    },
    {
      id: 5,
      image: "../../src/assets/career-5.svg",
      description: "Satisfied Parents & Students",
    },
  ]
  return (
    <div className="my-10 px-4 bg-[#0B3169] text-white pt-20">
      <h2 className="text-5xl font-bold text-center mb-8 font-font"> Impact of Career Counsellors </h2>

      <div className="join w-11/12 rounded-t-2xl rounded-b-none mx-auto flex flex-col md:flex-row bg-white text-[#0B3169]">
        {impacts.map((impact) => (
          <div key={impact.id} className="p-6 join-item w-full border-r mx-auto flex gap-5 flex-col justify-center items-center text-center">
            <img src={impact.image} className="rounded-lg object-cover"/>
            <h3 className="text-md font-bold">{impact.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpectCounseling;