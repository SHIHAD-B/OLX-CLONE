import { BiLeftArrowAlt } from 'react-icons/bi'


export const AddDetails = () => {


    return (
        <>
            <div className=' w-screen flex-column justify-center items-center pb-8'>
                <div className="w-full h-16 bg-gray-200 flex items-center p-2 gap-4 justify-between pl-3 ">
                    <BiLeftArrowAlt className='text-3xl' />
                </div>
                <span className='flex w-full justify-center h-16 items-center text-xl md:text-2xl font-bold'>POST YOUR AD</span>
                <div className='w-[50%] h-[85%] md:h-[81%] border border-gray-400 mx-auto flex-column '>
                    <div className='h-[10%] w-full flex  items-center pl-4'>
                        <span className=' text-l md:text-xl font-bold'>SELECTED CATEGORY</span>
                    </div>
                    <div className='h-[90%]  w-full flex-col border  border-t-gray-400 p-6'>
                        <span className='text-l md:text-xl font-bold '>INCLUDE SOME DETAILS</span>
                        <div className='w-full h-52  flex  flex-col  pt-2 gap-2'>
                            <label htmlFor="brand" className='text-black text-sm'>Brand*</label>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' type="text" />
                            <label htmlFor="brand" className='text-black text-sm'>Year*</label>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' type="text" />
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Fuel*</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>CNG & Hybrids</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Diesel</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Electric</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>LPG</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Petrol</button>
                            </div>
                        </div>

                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Transmission*</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Automatic</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Mannual</button>

                            </div>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>KM driven *</span>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' type="text" />
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>No. of Owners *</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>1st</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>2nd</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>3rd</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>4th</button>
                                <button className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>4+</button>
                            </div>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Ad title *</span>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' type="text" />
                            <p className='text-xs text-gray-400'>Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                        <div className='w-full h-52  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Description *</span>
                            <input className='h-32 w-[50%] rounded border-2 border-gray-800' type="text" />
                            <p className='text-xs text-gray-400'>Include condition, features and reason for selling</p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}