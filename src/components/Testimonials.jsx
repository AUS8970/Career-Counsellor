import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, TechWorld",
    image: "https://i.ibb.co.com/510RkTM/T1.jpg",
    feedback: "This platform has completely transformed how we operate. Its user-friendly interface allows even those with minimal technical knowledge to make the most of it. The integration with other tools is seamless, saving our team time and effort. The automation features have significantly reduced manual work, allowing us to focus on more strategic tasks. Additionally, customer support is exceptional — always quick to respond and provide helpful solutions. It has helped streamline our business processes, making our work more efficient. We've seen a notable increase in productivity, and I can't recommend it enough for businesses looking to optimize their workflows and improve overall performance.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Marketing Head, BrightFuture Co.",
    image: "https://i.ibb.co.com/DtN28sF/T2.jpg",
    feedback: "As a marketing professional, finding tools that are both powerful and easy to use is rare. This platform offers in-depth analytics, helping us understand our customer base and improve our campaigns. The customization options are also a huge plus — we can tailor it to our specific needs. The platform’s ability to scale with our growth ensures it remains a valuable asset, no matter how big our operations get. Plus, the support team is always available to assist with any questions or issues, making the whole experience seamless. It's become an essential tool in our marketing strategy.",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Freelance Designer",
    image: "https://i.ibb.co.com/7N962hy/T3.jpg",
    feedback: "Working as a freelancer, I need tools that are efficient and affordable. This platform has been a game-changer. Its simplicity and functionality allow me to complete projects faster and with higher quality. It integrates well with my existing tools, and the support is outstanding whenever I need assistance. I now spend less time managing tasks and more time focusing on my creative work. If you're a freelancer looking to streamline your workflow, I highly recommend this platform.",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Product Manager, Startup Inc.",
    image: "https://i.ibb.co.com/BnwC5zz/T4.jpg",
    feedback: "Our team’s productivity has improved drastically since using this platform. The interface is intuitive, and the collaboration features are ideal for teams looking to scale quickly. We can now track progress in real-time, and the ability to automate repetitive tasks has saved us valuable time. The support team is also incredibly responsive, always ready to assist with any technical challenges. This platform has truly become an essential tool for our growing business." ,
  },
  {
    id: 5,
    name: "David Wilson",
    designation: "Software Developer",
    image: "https://i.ibb.co.com/GPzwMvJ/T5.jpg",
    feedback: "I’ve had a fantastic experience using this platform. The user interface is clean and easy to navigate, and the integration with existing systems was effortless. I particularly love the powerful features that are simple to use, saving me both time and effort. The platform has improved how my team collaborates and manages projects, allowing us to stay on track and meet deadlines consistently. The support team is always there to help, and their timely responses make the entire experience seamless. Highly recommended for anyone looking to improve efficiency and organization in their workflow.",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="bg-[#0B3169] text-white py-12">
      <h2 className="text-center text-4xl font-bold mb-8">TESTIMONIALS</h2>
      <Swiper
        // navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col md:flex-row gap-8 justify-center p-10 items-center md:items-start">
              <div className="md:w-1/5">
                <img src={testimonial.image} className="w-40 h-40 rounded-full border-4 border-blue-900 mb-4" />
              </div>
              <div className="md:w-4/5 text-center md:text-left">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm italic text-gray-600">{testimonial.designation}</p>
                <p className="mt-4">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
