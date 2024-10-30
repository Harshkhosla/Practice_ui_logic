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
        <div className="w-full flex  justify-center items-start">

            <div className="flex flex-col lg:flex-row justify-evenly items-start space-x-20  lg:mt-10  max-w-3xl xl:max-w-6xl">




                <div className=" flex flex-col">
                    <div>
                        <h2 className="text-3xl  font-bold text-center">Your Dream. Our Expertise.</h2>
                    </div>
                    <div className="text-xl mt-10 mb-6 font-semibold text-center">

                        <p >What brings you to us today?</p>
                    </div>
                    {/* <div className="flex justify-between items-center"> */}

                        <div className="flex justify-evenly items-center lg:mt-6 gap-3  flex-wrap">
                            <CustomButton text={"NEET"}></CustomButton>
                            <CustomButton text={"JEE"}></CustomButton>
                            <CustomButton text={"Grade 6-10"}></CustomButton>
                            {/* <CustomButton text={"Test Series"}></CustomButton> */}
                        </div>
                    {/* </div> */}
                </div>






                <div className="max-w-sm ">
                    <div className="relative">
                        <img
                            src={images[currentIndex]}
                            alt="Carousel slide"
                            className="w-full items-start h-auto rounded-lg "
                        />

                    </div>
                    <div className="flex justify-center items-start mt-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full hover:cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                                onClick={goToNext}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}