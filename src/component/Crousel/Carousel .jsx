import { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      title: "PRICES SLASHED!",
      subtitle: "Recorded Courses for JEE & NEET at UNBELIEVABLE prices!",
      buttonLabel: "Buy Now",
      image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729680516/Homepage_Banner_1_grtip1.png" // Replace with your actual image URL
    },
    {
      title: "Limited Time Offer!",
      subtitle: "Get access to the best JEE & NEET courses at the lowest prices!",
      buttonLabel: "Buy Now",
      image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp" // Replace with your actual image URL
    },
    {
      title: "Limited Time Offer!",
      subtitle: "Get access to the best JEE & NEET courses at the lowest prices!",
      buttonLabel: "Buy Now",
      image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669258/Group_1171279293_1_e72ssd.png" // Replace with your actual image URL
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 p-6 text-white rounded-lg ${index === currentIndex ? "block" : "hidden"}`}
          >
          <img src={slide.image} alt="" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      </div>
  );
};

export default Carousel;
