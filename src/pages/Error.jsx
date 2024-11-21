import { Helmet } from 'react-helmet';
import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container w-2/3 lg:w-1/3 mx-auto text-center my-40 space-y-3'>
      <Helmet>
        <title> Error Page </title>
      </Helmet>
      <h1 className='text-6xl font-extrabold'>404</h1>
      <div className="">
        <h2 className='text-xl font-bold'>We can't find that page</h2>
        <p className='text-md mb-4'>
          We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on its behalf.
        </p>
        <Link className='bg-black text-white py-2 px-4 rounded-md' href="/">Home</Link>
      </div>
    </div>
  );
};

export default Error;