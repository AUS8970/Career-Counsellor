import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Program = () => {
  const steps = [
    { title: "Orientation Session", duration: "1 Hour" },
    { title: "Technical Skill Modules", duration: "25 Hours" },
    { title: "Counselling Skill Modules", duration: "15 Hours" },
    { title: "3 Live Interactive Sessions", duration: "6 Hours" },
    { title: "Practice Toolkit", duration: "" },
    { title: "Internship & Research Project", duration: "3 months" },
    { title: "LifeLong Learning & Support", duration: "" },
    { title: "Physical Immersion Workshop", duration: "7 Hours" },
  ];
  return (
    <div className="">
      <Helmet>
        <title> Our Program </title>
      </Helmet>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between py-20">
        <img className="w-80" src="https://i.ibb.co.com/1XzWcrQ/downlo.jpg" alt="" />
        <div className="flex flex-col items-center md:items-end gap-5 md:gap-20">
          <div className="text-center md:text-right space-y-3">
            <h2 className="text-5xl font-extrabold font-font text-[#0B3169]"> Career Counselling Program </h2>
            <p> By Programming Hero Team </p>
          </div>
          <button className="bg-lime-500 text-white px-5 py-3 rounded-full"> Enroll Now </button>
        </div>
      </div>
      <div className="py-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#0B3169] mb-10">
          Program Overview
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <Marquee pauseOnHover={true} className="font-medium">
            {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center pr-10">
              <div className="w-32 h-32 p-5 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-sm text-center font-semibold shadow-lg">
                {step.title}
              </div>
              {/* {step.duration && (
                <p className="mt-2 text-sm text-gray-700 font-medium">
                  Duration: <span className="font-bold">{step.duration}</span>
                </p>
              )} */}
            </div>
          ))}  
          </Marquee>
        </div>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-12 gap-5">
          <div className="flex w-full lg:w-1/3 flex-col items-center lg:items-start justify-start lg:text-left gap-3">
            <h1 className="text-xl font-semibold"> Are You Cut Out To Be A Career Counsellor? Take this quick test to find out Know Your Score. </h1>
            <button className="bg-lime-500 text-white px-5 py-2 rounded-full"> Know Your Score </button>
          </div>
          <div className="w-full lg:w-2/3">
            <img src="https://i.ibb.co.com/mhYg9XQ/DD.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="space-y-10 my-10">
        <div className="">
          <h2 className="text-3xl text-center font-extrabold text-[#0B3169]"> Meet the Instructors </h2>
          <p className="text-center"> Learn from the experts in the Career Counselling field </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 container w-2/3 mx-auto">
          <img className="" src="https://i.ibb.co.com/zFMQR1x/rakhi-toshniwal.jpg" alt="" />
          <div className="text-center lg:text-left">
            <div className="pb-3">
              <h2 className="text-xl font-bold"> Rakhi Toshniwal </h2>
              <p className=""> Senior Manager - Counselling </p>
            </div>
            <p className=""> As a Career Counselor, I've had the honor of guiding and advising over 5000 students and 2000 parents over my extensive 8-year career. Observing the diverse interests of students, I've effectively aided them in uncovering their optimal career paths, spanning from Fine Arts and Sports to Engineering and Medicine. I've been instrumental in providing invaluable guidance to students, enabling them to make well-informed decisions about their academic pursuits. </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 container w-2/3 mx-auto">
          <img className="" src="https://i.ibb.co.com/qm8gY0x/imgpsh-fullsize-anim.jpg" alt="" />
          <div className="text-center lg:text-left">
            <div className="pb-3">
              <h2 className="text-xl font-bold"> Dr. Shanell Leggins </h2>
              <p className=""> Expart - Counselling </p>
            </div>
            <p className=""> With over 25 years of experience in the field of education and 19+ years as a counselor, Dr. Shanell Leggins brings a wealth of expertise to her profession. Her counseling background encompasses diverse settings, including public, private, domestic, and international environments. Dr. Leggins remains at the forefront of current trends in college admissions by actively engaging in professional development activities such as attending conferences, workshops, webinars, college visits, and presenting at conferences. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
