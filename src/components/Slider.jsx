import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Personalized Career Counseling",
      description: "Receive one-on-one expert guidance to navigate your career journey, identify your strengths, and set achievable goals. Our experienced counselors provide tailored advice to help you make informed decisions about your future and overcome challenges on your professional path.",
    },
    {
      id: 2,
      title: "Resume Optimization",
      description: "Enhance your resume with professional assistance to showcase your skills effectively. Our experts will help you craft a compelling, standout resume tailored to your industry, ensuring you make a lasting impression on potential employers and recruiters.",
    },
    {
      id: 3,
      title: "Skill Development",
      description: "Participate in our hands-on skill development workshops designed to equip you with in-demand industry skills. Collaborate with peers and mentors, gain practical experience, and boost your confidence to excel in your career and professional growth.",
    },
  ];

  const navigation ={
    color: 'white'
  }

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full bg-cover bg-center" 
            >
              <div className="absolute inset-0 bg-cyan-700 text-white flex flex-col items-center justify-center p-4">
                <div className="w-2/4 text-center">
                  <h2 className="text-5xl mb-5 font-bold font-font"> {slide.title} </h2>
                  <p className="mt-2 text-sm font-poppins"> {slide.description} </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;