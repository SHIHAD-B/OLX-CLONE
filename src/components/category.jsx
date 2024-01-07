import { IoIosArrowDown } from 'react-icons/io'

export const Category = () => {
    return (
        <>
            <div className=" h-8 w-full mt-1 border border-gray-200 flex md:justify-around md:px-32">
                <span className=' w-full cursor-pointer hover:text-blue-500 flex md:hidden justify-between items-center p-2'> Browse categores <span>see all</span></span>
                <span className='hidden md:flex cursor-pointer   gap-2 items-center font-bold'> ALL CATEGORY <IoIosArrowDown className='text-2xl' /></span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500 '>Cars</span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500 '>Motorcycles</span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500 '>Mobile Phones</span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500 '>For Sale: Houses & Apartments</span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500 '>
                    Scooters
                </span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500  '>Commercial & Other Vehicles
                </span>
                <span className='hidden md:flex cursor-pointer hover:text-blue-500  '>For Rent: Houses & Apartments</span>
            </div>
        </>
    )
}