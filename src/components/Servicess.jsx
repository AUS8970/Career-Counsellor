import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navber";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  
  return (
    <div className="">
      <div className="my-10 px-4 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <img src={service.image} alt={service.name} className="rounded-lg w-full h-52 object-cover"/>
              <div className="pt-4">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {service.description.slice(0, 100)}...{" "}
                  <Link to={`/services/${service.id}`} className="text-primary">Read More</Link>
                </p>
                <p className="text-sm">
                  <span className="font-bold">Category:</span> {service.category}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Counselor:</span> {service.counselor}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Rating:</span> {service.rating} ⭐
                </p>
                <p className="text-sm mb-4">
                  <span className="font-bold">Price:</span> {service.price}
                </p>
                <Link to={`/services/${service.id}`} className="bg-[#0B3169] text-white py-2 px-4 rounded-md hover:bg-blue-900">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;