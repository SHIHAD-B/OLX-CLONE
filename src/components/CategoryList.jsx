
import { IoIosArrowForward } from 'react-icons/io'

export const CategoryList = (props) => {
   

    const handllist = () => {

        props.setRelated([...props.subValue])
    }
   
    return (

        <div onClick={handllist} className='h-12 w-full border border-gray-400 flex items-center justify-between pl-4 pr-4 cursor-pointer' >
            <span className='text-gray-500 text-xl flex h-full items-center gap-4'><props.icon className=' text-xl' /> {props.name}</span>
            <IoIosArrowForward  className='text-gray-500 cursor-pointer' />
        </div>
    )
}