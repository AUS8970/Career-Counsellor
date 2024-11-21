import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Skills Employers Look For",
      snippet: "Discover the skills that can make you stand out in a competitive job market.",
      image: "https://i.ibb.co.com/pwvwtHP/A1.jpg",
    },
    {
      id: 2,
      title: "How to Ace Your Next Job Interview",
      snippet: "Learn tips and tricks to leave a lasting impression on interviewers.",
      image: "https://i.ibb.co.com/bX56zqq/A2.jpg",
    },
    {
      id: 3,
      title: "Balancing Work and Life Effectively",
      snippet: "Explore strategies to maintain a healthy work-life balance.",
      image: "https://i.ibb.co.com/LRBmP2Y/A3.jpg",
    },
  ];

  return (
    <div className="mt-10 p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Career Blogs & Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-100 p-4 rounded shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.snippet}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;