import React from 'react';


const Service = ({ title, description, imgSrc, buttonText, onClick }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
    <a href="#">
      <img className="rounded-t-lg h-48 w-full object-cover" src={imgSrc} alt="Hotel Service" />
    </a>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <button
        onClick={onClick}
        className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonText}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
);


const Services = () => {
  const services = [
    {
      title: 'Spa Booking',
      description: 'Relax and rejuvenate with our world-class spa services.',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1723709090773-0a9566c25afc?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Book a Session',
      onClick: () => alert('Spa session booked!'),
    },
    {
      title: 'Concierge Services',
      description: 'Get assistance with booking tours, restaurant reservations, and more.',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1723874509453-8bf2b4917053?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Contact Concierge',
      onClick: () => alert('Concierge has been contacted!'),
    },
    {
      title: 'Restaurant Reservations',
      description: 'Reserve a table at our in-house fine dining restaurant.',
      imgSrc: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Reserve Now',
      onClick: () => alert('Table reserved!'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Hotel Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            buttonText={service.buttonText}
            onClick={service.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
