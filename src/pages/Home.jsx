import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { Category } from "../components/category"
import { BsFillLightningFill } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from "react-router-dom"

import { db, collection, getDocs } from "../firebase"

export const Home = () => {
    const [count, setCount] = useState(4)
    const [limitedData, setLimitedData] = useState([])
    const [fetchData, setFetchdata] = useState([])
    const navigate = useNavigate()

    const handleProductDetail = (id) => {
        navigate('/productdetails/' + id)
    }

    async function fetchDataFromFirestore() {
        try {
            const dataCollection = collection(db, 'product_collection');
            const querySnapshot = await getDocs(dataCollection);

            let obj = []
            querySnapshot.forEach((doc) => {

                const data = doc.data();
                obj.push(data)
            });
            setFetchdata(obj)
            console.log(fetchData+"jjjjjj");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const handleCount = () => {
        setCount(count + 4)
    }

    useEffect(() => {
        fetchDataFromFirestore();

        const newLimitedData = [];
        if (count <= fetchData.length) {

            for (let i = 0; i < count; i++) {
                newLimitedData.push(fetchData[i]);
            }

            setLimitedData(newLimitedData);

        }else{
            for (let i = 0; i < fetchData.length; i++) {
                newLimitedData.push(fetchData[i]);
            }

            setLimitedData(newLimitedData);
        }
    }, [count]);
    useEffect(() => {
        fetchDataFromFirestore();

        const newLimitedData = [];
        if (count <= fetchData.length) {

            for (let i = 0; i < count; i++) {
                newLimitedData.push(fetchData[i]);
            }

            setLimitedData(newLimitedData);

        }else{
            for (let i = 0; i < fetchData.length; i++) {
                newLimitedData.push(fetchData[i]);
            }

            setLimitedData(newLimitedData);
        }
    }, []);
    return (
        <>
            <Navbar />
            <Category />

            <div className='w-full h-auto flex flex-col justify-center items-center pb-10'>
                <span className="w-[72%] flex justify-start items-center p-2 text-2xl mt-4">Fresh recommendations</span>
                <div className="h-auto w-[72%] flex flex-wrap p-2 gap-2 justify-start items-start">

                    {limitedData.map((data, idx) => {
                        return (

                            <div key={idx} onClick={() => handleProductDetail(data?.product?.id)} className="h-64 w-64 bg-slate-100 p-1 border border-gray-400 rounded relative cursor-pointer">
                                <div className="relative h-[60%] w-full border border-gray-400 rounded">
                                    <img className="absolute h-full w-full object-contain" src={data?.product?.images} alt="" />


                                    {idx < 4 && (

                                        <div className="absolute top-1 left-0 h-5 w-[35%] bg-yellow-400 text-xs text-gray-600 flex items-center justify-center gap-2 rounded"><BsFillLightningFill className="text-black" />featured</div>
                                    )}

                                    
                                    <div className="absolute top-1 right-1 bg-white h-10 w-10 rounded-3xl flex justify-center items-center cursor-pointer"><FiHeart className="text-xl" /></div>
                                </div>
                                <div className="w-full h-[40%] pl-3 pt-1 flex flex-col ">
                                    <span className="text-xl font-bold">₹{data?.product?.price}</span>
                                    <span className="text-sm">{data?.product?.year}-{data?.product?.km}</span>
                                    <span className="text-sm line-clamp-1">{data?.product?.brand}</span>
                                    <span className="text-sm">{data?.product?.city},{data?.product?.state}</span>
                                </div>
                            </div>
                        )
                    })}






                </div>
                <button onClick={handleCount} className="border-2 hover:border-4 border-black rounded h-12 text-lg p-2 font-bold flex justify-start items-center">Load more</button>
            </div >
        </>
    )
}
