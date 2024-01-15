
import { Navbar } from "../components/Navbar"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { db, getDocs, query, where, collection } from "../firebase"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { FiShare2 } from 'react-icons/fi'
import { BiHeart } from 'react-icons/bi'
import AuthContexts from '../context/AuthContexts'
export const Productdetails = () => {
    const { user } = useContext(AuthContexts)

    const [product_data, setProductdata] = useState({})
    const { id } = useParams()

    async function getDocumentByFieldValue(collectionPath, value) {

        const collectionRef = collection(db, collectionPath);

        try {

            const q = query(collectionRef, where('product.id', '==', value))
            const querySnapshot = await getDocs(q);
            // console.log(querySnapshot.docs);
            if (!querySnapshot.empty) {
                const document = querySnapshot.docs[0].data();
                return document;
            } else {
                console.log('No document found with the specified field value.');
                return null;
            }
        } catch (error) {
            console.error('Error fetching document:', error.message);
            return null;
        }
    }


    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 700;


    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 700;

    }


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product_data.product.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + product_data.product.images.length) % product_data.product.images.length
        );
    };

    //image swap 
    const imageSwap = (index) => {
        setCurrentImageIndex(index)
    }


    const collectionPath = 'product_collection';
    const fieldValue = id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const document = await getDocumentByFieldValue(collectionPath, fieldValue);
                if (document) {
                    setProductdata(document)
                } else {
                    console.log('No matching document found.');
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="h-screen w-full  flex justify-center bg-slate-100 ">
                <div className="h-full w-[80%]  flex pt-4 ">
                    <div className="h-full w-[65%]  flex flex-col">
                        <div className="w-full h-[70%]  flex flex-col">
                            {/* image */}
                            <div className="h-[80%] w-full bg-black relative">
                                <IoIosArrowDroprightCircle
                                    className="text-white text-5xl absolute right-0 top-[50%] cursor-pointer"
                                    onClick={handleNextImage}
                                />
                                <img
                                    className="h-full w-full object-contain"
                                    src={product_data?.product?.images[currentImageIndex]}
                                    alt=""
                                />
                                <IoIosArrowDropleftCircle
                                    className="text-white text-5xl absolute left-0 top-[50%] cursor-pointer"
                                    onClick={handlePrevImage}
                                />
                            </div>
                            {/* multiple image */}
                            <div className="h-[20%] w-full flex items-center bg-white border-b-4">

                                {(<IoIosArrowBack onClick={slideLeft} className={`text-2xl  cursor-pointer   ${product_data?.product?.images.length > 9 ? 'visible' : 'invisible'}`} />)}

                                <div id={'slider'} className="h-full w-full bg-white flex gap-3 items-center  overflow-x-auto scroll-smooth scrollbar-hide">
                                    {product_data?.product?.images.map((value, index) => (
                                        <div key={index} onClick={() => imageSwap(index)} className="h-[65%] w-16 bg-black rounded shrink-0 cursor-pointer">
                                            <img className="h-full w-full object-cover" src={value} alt="" />
                                        </div>
                                    ))}
                                </div>
                                {(<IoIosArrowForward onClick={slideRight} className={`text-2xl cursor-pointer   ${product_data?.product?.images.length > 9 ? 'visible' : 'invisible'}`} />)}

                            </div>

                        </div>
                        <div className="w-full h-[30%]  flex flex-col bg-white">
                            <span className="text-2xl font-bold text-gray-900 pl-2">Details</span>
                            <div className="w-full h-[60%]  flex flex-wrap flex-col justify-center px-5">
                                <div className="flex justify-around ">
                                    <span className="w-[25%] flex justify-start">Brand</span>
                                    <span className="w-[25%] flex justify-start">{product_data?.product?.brand}</span>
                                    <span className="w-[25%] flex justify-start">Fuel</span>
                                    <span className="w-[25%] flex justify-start">{product_data?.product?.fuel}</span>
                                </div>
                                <div className="flex justify-around  border-b border-gray-300">
                                    <span className="w-[25%] flex justify-start">Year</span>
                                    <span className="w-[25%] flex justify-start">{product_data?.product?.year}</span>
                                    <span className="w-[25%] flex justify-start">KM driven</span>
                                    <span className="w-[25%] flex justify-start">{product_data?.product?.km} km</span>
                                </div>
                            </div>

                            <div className="h-auto  w-full  flex flex-col pl-2 gap-1 bg-white">
                                <span className="text-2xl font-bold text-gray-900 ">Description</span>
                                <span>{product_data?.product?.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-[35%]  flex flex-col items-center gap-3">
                        <div className="h-auto w-[95%] bg-white rounded flex flex-col p-4 gap-3">
                            <span className="text-4xl font-bold flex w-full justify-between items-center">₹{product_data?.product?.price} <span className="flex gap-3 text-2xl"><FiShare2 /> <BiHeart /></span> </span>
                            <span>{product_data?.product?.title}</span>
                            <span>{product_data?.product?.city},{product_data?.product?.state}</span>
                        </div>
                        <div className="h-40 w-[95%] bg-white rounded flex flex-col p-4">
                            <div className="flex h-[50%] w-full  items-center gap-5">
                                <img className="h-full w-20 rounded-full bg-black" src={product_data?.product?.profile} alt="" />
                                <span className="flex items-center justify-between w-full text-2xl font-bold">{product_data?.product?.userName} <IoIosArrowForward className="text-3xl" /></span>
                            </div>
                            <div className="h-12 rounded w-full border-2 border-black hover:border-4 cursor-pointer flex justify-center items-center  font-bold">Chat with seller</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}