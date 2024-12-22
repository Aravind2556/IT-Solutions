import React, { useState, useEffect } from 'react';


export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  


  // Array of slides for easier management
  const slides = [
    {
      image: "path-to-image1.jpg", 
      title: "First slide label", 
      description: "Some representative placeholder content for the first slide."
    },
    {
      image: "path-to-image2.jpg", 
      title: "Second slide label", 
      description: "Some representative placeholder content for the second slide."
    },
    {
      image: "path-to-image3.jpg", 
      title: "Third slide label", 
      description: "Some representative placeholder content for the third slide."
    }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto scroll functionality
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(nextSlide, 3000); // Change every 3 seconds
      return () => clearInterval(interval); // Clear interval on cleanup
    }
  }, [autoScroll]);

  return (
    <>
    <div
      id="carouselExampleCaptions"
      className="scroll relative"
      onMouseEnter={() => setAutoScroll(false)} // Pause auto-scroll on hover
      onMouseLeave={() => setAutoScroll(true)} // Resume auto-scroll when mouse leaves
    >
      {/* Carousel Indicators */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center space-x-2 py-4">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)} // Manually set the slide
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0">
              <img src={slide.image} className="d-block w-96 h-96 bg-white" alt="jbh" />
              <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 text-black p-4">
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black bg-white bg-opacity-50 px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        <span className="visually-hidden">Previous</span>
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black bg-white bg-opacity-50 px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        <span className="visually-hidden">Next</span>
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    
    </>
  );
};
