import { useState } from "react";
import { CustomButton } from "../Button/CustomButton"



export const Hero = () => {

    const images = [
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604922%2FInteractive_cdbhfw.webp&w=828&q=75",
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604921%2FCustomized_wy9dpe.webp&w=828&q=75",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    return (
        <div className="w-full flex justify-center items-start p-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-20 max-w-3xl xl:max-w-6xl">

                <div className="flex flex-col items-center lg:items-start ">
                    <div className="space-y-20">

                    <h2 className="text-3xl font-bold text-center lg:text-left">Your Dream. Our Expertise.</h2>
                    <p className="text-xl font-semibold text-center lg:text-left">What brings you to us today?</p>
                    </div>

                    <div className="flex justify-center lg:justify-start items-center mt-6 gap-3 flex-wrap">
                        <CustomButton text={"NEET"} />
                        <CustomButton text={"JEE"} />
                        <CustomButton text={"Grade 6-10"} />
                    </div>
                </div>


                <div className="max-w-sm mt-10 lg:mt-0">
                    <div className="relative">
                        <img
                            src={images[currentIndex]}
                            alt="Carousel slide"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center mt-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}