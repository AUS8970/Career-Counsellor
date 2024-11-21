import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RiAccountCircleFill } from "react-icons/ri";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch service data based on the ID
  useEffect(() => {
    // Replace this URL with your actual JSON or API endpoint
    fetch(`/services.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.find((item) => item.id === parseInt(id));
        if (selectedService) {
          setService(selectedService);
        } else {
          navigate("/*"); // Redirect if service is not found
        }
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, [id, navigate]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
      toast.success("Comment added successfully!");
    } else {
      toast.error("Comment cannot be empty.");
    }
  };

  if (!service) {
    return <div>Loading service details...</div>;
  }

  return (
    <div className="">
      <Helmet>
        <title> {service.name} || Service details </title>
      </Helmet>
      <div className="p-8">
          <div className="container mx-auto">
            <div className="">
              <h1 className="text-3xl font-bold mb-7 text-center">{service.name}</h1>
            </div>
            <div className="flex flex-col md:flex-row md:gap-6 items-start">
              <div className="w-full lg:w-1/2 flex flex-col space-y-10">
                <img src={service.image} className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="mb-4"><strong> Description: </strong> {service.description}</p>
                <p> <strong>Category:</strong> {service.category} </p>
                <p> <strong>Price:</strong> {service.price} </p>
                <p> <strong>Rating:</strong> {service.rating} / 5 </p>
                <p> <strong>Counselor:</strong> {service.counselor} </p>
                <div className="card-actions items-end mt-5">
                  <Link to={`/`} className="px-4 py-2 rounded-lg font-semibold text-white bg-[#0B3169]"> Back to Home </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      <hr className="" />
      <div className="bg-slate-50 pt-6 pb-10">
          <div className="container mx-auto flex flex-col md:flex-row gap-6">
            <div className="mt-6 w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4"> Comments </h2>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                className="w-full p-4 border rounded-lg"
                rows="4"
              ></textarea>
              <button
                onClick={handleCommentSubmit}
                className="bg-[#0B3169] text-white px-6 py-2 rounded-lg mt-2"
              >
                Submit Comment
              </button>
            </div>
            <div className="mt-6 w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4"> All Comments </h3>
              {comments.length > 0 ? ( 
                comments.map((item, index) => (
                  <div className="flex gap-4 p-4 border rounded-lg mb-4">
                    <div className="text-4xl text-[#0B3169]">
                      <RiAccountCircleFill />
                    </div>
                    <p key={index} className="">
                      {item}
                    </p>
                  </div>
                ))
              ) : (
                <p> No comments yet. Be the first to comment! </p>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
