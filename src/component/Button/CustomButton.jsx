export const CustomButton = ({ text , value }) => {
    
    return (
        <button className={`flex border-2 border-customBlue ${value?'lg:px-3 lg:py-1  px-5 py-4':'px-5 py-2'}  text-sm font-semibold rounded-3xl items-center   ${value ? 'hidden lg:inline' : ''} `}>
            {text}
        </button>
    )
}