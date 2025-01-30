import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <h2 className="text-3xl font-bold text-center mb-8"> Our Services </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-gradient-to-t from-cyan-400 to-cyan-700 rounded-lg overflow-hidden p-6">
              <img src={service.image} alt={service.name} className="rounded-lg w-full h-52 object-cover border-2 border-cyan-600"/>
              <div className="pt-4 text-white">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <p className=" text-sm mb-2">
                  {service.description.slice(0, 100)}...{" "}
                  <Link to={`/services/${service.id}`} className="text-black">Read More</Link>
                </p>
                <p className="text-sm">
                  <span className="font-bold">Category:</span> {service.category}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Counselor:</span> {service.counselor}
                </p>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <span className="font-bold">Rating:</span> {service.rating} ⭐
                  </p>
                  <p className="text-sm mb-4">
                    <span className="font-bold">Course Fee: </span> {service.price}
                  </p>
                </div>
                <Link to={`/services/${service.id}`} className="bg-cyan-700 text-white py-2 px-4 rounded-md hover:bg-blue-900">
                  Learn More
                </Link>
                <Link to={`/services/${service.id}`} className="bg-cyan-700 text-white py-2 px-4 rounded-md hover:bg-blue-900">
                  Enroll Now
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
