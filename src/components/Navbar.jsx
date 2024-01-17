import { IoIosArrowDown } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { LoginModal } from './LoginModal'
import { useContext, useState } from 'react'
import AuthContexts from '../context/AuthContexts'
// import logo from "./src/assets/images/OLX-Logo-PNG_h0bmj9.png"
import logo from '../assets/images/OLX-Logo-PNG_h0bmj9.png'
export const Navbar = () => {
    const { user, logbutton, handleLogin, logOut } = useContext(AuthContexts)


    const navigate = useNavigate()
    const haldleSell = () => {
        if (user) {

            navigate('/postcategory')
        } else {
            alert('please login to sell product')
        }
    }




    return (
        <>

            {logbutton && (
                <LoginModal />
            )}
            <div className="w-full h-16 bg-gray-200 flex items-center p-2 gap-4 justify-between px:6 md:px-36 ">
                <img className="h-7" src={logo} alt="" />
                <div className="hidden  h-12 w-72 border-2 border-black md:flex items-center bg-white px-2 rounded">

                    <BiSearch className='text-2xl mr-2' />
                    <input
                        className="h-full w-full outline-none"

                        placeholder="INDIA"
                    />
                    <IoIosArrowDown className='text-3xl' />
                </div>
                <div className="hidden h-12 w-96 border-2 border-black md:flex items-center bg-white  rounded" style={{ width: "550px" }}>
                    <input className='h-full w-full outline-none'
                        placeholder=' Find Cars, Mobile Phones and more...' />
                    <div className='h-full w-12 bg-gray-800 flex justify-center items-center' >
                        <BiSearch className='text-2xl text-white' />
                    </div>
                </div>
                <div className='h-full font-bold  flex items-center gap-1'>
                    <span>ENGLISH</span>
                    <IoIosArrowDown className='text-3xl' />
                </div>
                <BsChat className='text-xl' />
                <FaRegBell className='text-xl' />
                <div className='h-full w-20  flex gap-2 items-center'>
                    <div className='h-full w-12 bg-black rounded-full'>
                        {user && (

                            <img className='h-full w-full rounded-full' src={user?.photoURL} alt="" />
                        )}
                    </div>
                    <IoIosArrowDown className='text-3xl' />
                </div>
                {!user ? <span className='underline cursor-pointer' onClick={handleLogin}>login</span> : <span className='underline  cursor-pointer' onClick={logOut}>logout</span>}

                <div className='h-10 w-24 sell flex justify-center items-center rounded-3xl' >
                    <div onClick={haldleSell} className=' cursor-pointer h-[82%] w-[86%] bg-white  rounded-3xl flex items-center justify-center gap-1'>
                        <TiPlus />
                        <span className='font-bold'>SELL</span>
                    </div>
                </div>

            </div>

        </>
    );
};

