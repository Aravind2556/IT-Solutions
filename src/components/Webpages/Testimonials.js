import React, { useState } from 'react';

const testimonials = [
  {
    name: "Teresa May",
    role: "Founder at ET Company",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    rating: 4.5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  },
  {
    name: "Maggie McLoan",
    role: "Photographer at Studio LA",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
    rating: 5,
    feedback:
      "Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis labore laboriosam.",
  },
  {
    name: "Alexa Horwitz",
    role: "Front-end Developer in NY",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
    rating: 4,
    feedback:
      "Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.",
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, role, image, rating, feedback } = testimonials[currentIndex];

  return (
    <div className="relative z-10 py-10 px-5 top-6 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-500">Our Team</h3>
        <div className="relative max-w-lg mx-auto bg-slate-200 bg-opacity-90 shadow-inner rounded-lg p-6 h-[300px] w-[600px]">
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt={name}
              className="rounded-full shadow-lg"
              width="100"
              height="100"
            />
          </div>
          <h5 className="text-lg font-semibold">{name}</h5>
          <h6 className="text-sm text-gray-500 mb-3">{role}</h6>
          <div className="flex justify-center space-x-1 text-blue-500 mb-4">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
          </div>
          <p className="text-gray-600">{feedback}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
