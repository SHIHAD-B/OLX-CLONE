import { BiLeftArrowAlt } from 'react-icons/bi'
import list from '../ConstantData/list'
import { useNavigate } from 'react-router-dom'
import { CategoryList } from './CategoryList'
import { useState } from 'react'

export const PostCategory = () => {

    const [related, setRelated] = useState([])

    const navigate = useNavigate()

    const handleadd = () => {
        navigate('/adddetails')
    }
    const back = () => {
        navigate('/')
    }

    return (
        <>
            <div className='h-screen w-screen flex-column justify-center items-center'>
                <div className="w-full h-16 bg-gray-200 flex items-center p-2 gap-4 justify-between pl-3 ">
                    <BiLeftArrowAlt onClick={back} className='text-3xl cursor-pointer' />
                </div>
                <span className='flex w-full justify-center h-16 items-center text-xl md:text-2xl font-bold'>POST YOUR AD</span>
                <div className='w-[60%] h-[85%] md:h-[81%] border border-gray-400 mx-auto flex-column '>
                    <div className='h-[10%] w-full flex  items-center pl-4'>
                        <span className=' text-l md:text-xl font-bold'>CHOOSE A CATEGORY</span>
                    </div>
                    <div className='h-[90%]  w-full flex'>
                        <div className=' w-full h-full md:w-[50%] flex-column '>
                            {list.map((value) => {
                                return (
                                    <CategoryList key={value.id} name={value.name} icon={value.icon} subValue={value.sub} setRelated={setRelated} />
                                )

                            })}

                        </div>
                        <div className='hidden md:block w-full h-full md:w-[50%] border-b   border-b-gray-400'>
                            {related.map((value, index) => (
                                <div onClick={handleadd} key={index} className='cursor-pointer h-12 w-full border border-gray-400 flex items-center justify-between pl-4 pr-4' >
                                    <span className='text-gray-500 text-xl flex h-full items-center gap-4'>{value}</span>

                                </div>
                            )

                            )}

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}