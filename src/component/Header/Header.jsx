import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <>
            <header>
                <div className="flex justify-between  lg:justify-evenly items-center pt-5 space-x-14">
                    <div className="flex space-x-14">
                        <div className=" flex ">
                            <button className="lg:hidden md:px-3 px-2">
                                <FontAwesomeIcon icon={faBars} className="text-xl " />
                            </button>
                            <img src="https://allen.in/logo_light.svg" className="lg:w-24 w-20 " />
                        </div>
                        <div className=" flex space-x-6 ">
                            <div className='lg:block hidden' >Cources</div>
                            <div className='lg:block hidden'>Test Series</div>
                            <div className='lg:block hidden'>Scolarships</div>
                            <div className='lg:block hidden'>Result</div>
                            <div className='xl:block hidden'>Study Materials </div>
                            <div className='xl:block hidden'>About us</div>
                        </div>
                    </div>
                    <div className=" flex lg:space-x-8 space-x-1" >
                        <div className='flex items-center space-x-2 pr-2'>

                            <FontAwesomeIcon icon={faPhone} className="text-customBlue inline lg:hidden items-center" />
                            <div className='text-sm font-semibold inline lg:hidden'>Talk to us</div>
                        </div>

                        <button className=" flex items-center border gap-2 rounded-2xl px-5 py-2 text-xs font-bold text-white bg-customBlue hidden lg:inline ">
                            <FontAwesomeIcon icon={faPhone} /> <span className="hidden xl:inline">Talk to us</span> </button>
                        <button className='flex border-2 border-customBlue px-3 py-1 text-sm font-semibold rounded-2xl items-center hidden lg:inline'>Login </button>
                    </div>
                </div>
            </header>
        </>
    )
}