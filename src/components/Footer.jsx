import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[#0B3169] text-white'>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-11/12 mx-auto py-8 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <img className="w-36" src="https://i.ibb.co.com/RTZDh9y/CC.png" alt="" />
          <Link to="/" className="text-xl font-bold"> Career Counsellor </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2"> Check Your Fitment </h2>
          <p className="text-sm"> Premium Overseas Admission</p>
          <p className="text-sm"> Student Profile Building </p>
          <p className="text-sm"> Instructors </p>
          <p className="text-sm"> Pricing </p>
          <p className="text-sm"> Refund Policy </p>
          <p className="text-sm"> FAQs </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-2"> Community </h2>
          <p className="text-sm"> Networking & Events </p>
          <p className="text-sm"> Careers Transitioned </p>
          <p className="text-sm"> Achievements </p>
          <p className="text-sm"> Counselling Partners </p>
          <p className="text-sm"> Knowledge Sharing </p>
          <p className="text-sm"> Blog </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-2"> Our Story </h2>
          <p className="text-sm"> About Us </p>
          <p className="text-sm"> Meet The Team </p>
          <p className="text-sm"> Awards & Recognitions </p>
          <p className="text-sm"> Contact Us </p>
          <p className="text-sm"> Pathway to excellence </p>
          <p className="text-sm"> Set up Your Business </p>
        </div>
      </div>
      <p className="text-center text-sm p-4"> © Career Counselor 2024 </p>
    </div>
  );
};

export default Footer;