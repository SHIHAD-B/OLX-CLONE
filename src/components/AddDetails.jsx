import { BiLeftArrowAlt } from 'react-icons/bi'
import { UploadPhotos } from './UploadPhotos'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { db, collection, addDoc, storage, ref, uploadBytes, getDownloadURL } from '../firebase'
import { JustLoading } from './loading'
import { useNavigate } from 'react-router-dom'
import AuthContexts from '../context/AuthContexts'


import { Timestamp, serverTimestamp } from 'firebase/firestore'

export const AddDetails = () => {

    const { user } = useContext(AuthContexts)

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [authToken, setAuthToken] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    //id generator function 
    function generateUniqueId() {

        const randomSegment = () =>
            Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);

        const uniqueId =
            new Date().getTime().toString(16) + randomSegment() + randomSegment() + randomSegment();

        return uniqueId;
    }

    const [productData, setProductData] = useState({
        id: generateUniqueId(),
        user: user.email,
        profile: user.photoURL,
        userName: user.displayName,
        brand: "",
        year: "",
        fuel: "",
        transmission: "",
        km: "",
        no_of_owners: "",
        title: "",
        description: "",
        price: "",
        images: [],
        date: serverTimestamp(),
        state: "",
        city: ""

    })

    const [errors, setErrors] = useState({
        brand: "",
        year: "",
        fuel: "",
        transmission: "",
        km: "",
        no_of_owners: "",
        title: "",
        description: "",
        price: "",
        images: [],
        state: "",
        city: ""
    })

    const handlePostNow = async () => {
        try {

            // validation
            let isAllowed = true;
            if (!productData?.brand) {
                setErrors((prev) => ({
                    ...prev,
                    brand: "Brand cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    brand: "",
                }));

            }

            if (!productData?.fuel) {
                setErrors((prev) => ({
                    ...prev,
                    fuel: "select any fuel",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    fuel: "",
                }));

            }
            if (!productData?.transmission) {
                setErrors((prev) => ({
                    ...prev,
                    transmission: "select any transmission method",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    transmission: "",
                }));

            }
            if (!productData?.km) {
                setErrors((prev) => ({
                    ...prev,
                    km: "km cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    km: "",
                }));

            }
            if (!productData?.no_of_owners) {
                setErrors((prev) => ({
                    ...prev,
                    no_of_owners: "select no of owners",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    no_of_owners: "",
                }));

            }
            if (!productData?.title) {
                setErrors((prev) => ({
                    ...prev,
                    title: "title cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    title: "",
                }));

            }
            if (!productData?.description) {
                setErrors((prev) => ({
                    ...prev,
                    description: "description cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    description: "",
                }));

            }
            if (!productData?.price) {
                setErrors((prev) => ({
                    ...prev,
                    price: "price cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    price: "",
                }));

            }
            if (!productData?.year) {
                setErrors((prev) => ({
                    ...prev,
                    year: "Year cannot be empty",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    year: "",
                }));

            }
            if (!productData?.images.length) {
                setErrors((prev) => ({
                    ...prev,
                    images: "atleast one image required",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    images: "",
                }));

            }
            if (!productData?.state) {
                setErrors((prev) => ({
                    ...prev,
                    state: "please select state",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    state: "",
                }));

            }
            if (!productData?.city) {
                setErrors((prev) => ({
                    ...prev,
                    city: "please select city",
                }));
                isAllowed = false;
            } else {
                setErrors((prev) => ({
                    ...prev,
                    city: "",
                }));

            }




            if (isAllowed) {

                setLoading(true)

                const imageUrls = await Promise.all(images.map(async (image) => {
                    const storageRef = ref(storage, `images/${image.name}`);
                    await uploadBytes(storageRef, image);

                    return getDownloadURL(storageRef);
                }));

                const docRef = await addDoc(collection(db, 'product_collection'), {
                    product: {
                        ...productData,
                        images: imageUrls,
                    },
                });

                console.log('Document written with ID:', docRef.id);

                navigate('/')
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
        setLoading(false)
    };
    const handleInputChange = (event) => {

        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {

            setProductData((prevData) => ({
                ...prevData,
                [name]: checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value),
            }));
            console.log(productData.images.length + ">>>>>>>>>");

        } else {
            const button = event.target;
            button.style.backgroundColor = "skyblue";



            setProductData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            productData.images.map((value) => console.log(value.name, 'kffdhhgjkljh'))
            console.log(productData.images.length + "<<<<<<<");
        }

    }

    useEffect(() => {

        const getAuthToken = async () => {
            try {
                const response = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
                    headers: {
                        'Accept': 'application/json',
                        'api-token': '7_geZXM6EJV5db1GWApkU3GpFnAfvJVkoC9NxqHn5vrdK1biSgGB7i6cdmRgkjvbWqk',
                        'user-email': 'shihadsafe@gmail.com',
                    },
                });

                const newAuthToken = response.data.auth_token;
                setAuthToken(newAuthToken);

                const statesResponse = await axios.get('https://www.universal-tutorial.com/api/states/India', {
                    headers: {
                        'Authorization': `Bearer ${newAuthToken}`,
                        'Accept': 'application/json',
                    },
                });

                const statesData = statesResponse.data;
                setStates(statesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getAuthToken();
    }, []);

    const handleStateChange = async (state) => {
        try {
            const citiesResponse = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': 'application/json',
                },
            });

            const citiesData = citiesResponse.data;
            setCities(citiesData);
            setSelectedState(state);
            setProductData((prevData) => ({
                ...prevData,
                state: state,
                city: '',
            }));
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleCityChange = (city) => {
        setSelectedCity(city);
        setProductData((prevData) => ({
            ...prevData,
            city: city,
        }));
    };

    const back = () => {
        navigate('/postcategory')
    }
    return (
        <>

        
            {loading && <JustLoading additional={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`} />}
            <div className=' w-screen flex-column justify-center items-center pb-8 '>
                <div className="w-full h-16 bg-gray-200 flex items-center p-2 gap-4 justify-between pl-3 ">
                    <BiLeftArrowAlt onClick={back} className='text-3xl cursor-pointer' />
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
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' onChange={handleInputChange} name="brand" type="text" />
                            <p className='text-red-600 text-sm'>{errors?.brand}</p>
                            <label htmlFor="brand" className='text-black text-sm'>Year*</label>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' onChange={handleInputChange} name="year" type="number" />
                            <p className='text-red-600 text-sm'>{errors?.year}</p>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Fuel*</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button name="fuel" type="checkbox" onClick={handleInputChange} value="CNG & Hybrids" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white' >CNG & Hybrids</button>
                                <button name="fuel" type="checkbox" onClick={handleInputChange} value="Diesel" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Diesel</button>
                                <button name="fuel" type="checkbox" onClick={handleInputChange} value="Electric" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Electric</button>
                                <button name="fuel" type="checkbox" onClick={handleInputChange} value="LPG" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>LPG</button>
                                <button name="fuel" type="checkbox" onClick={handleInputChange} value="Petrol" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Petrol</button>
                            </div>
                            <p className='text-red-600 text-sm'>{errors?.fuel}</p>
                        </div>

                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Transmission*</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button name="transmission" type="checkbox" onClick={handleInputChange} value="Automatic" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Automatic</button>
                                <button name="transmission" type="checkbox" onClick={handleInputChange} value="Mannual" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>Mannual</button>

                            </div>
                            <p className='text-red-600 text-sm'>{errors?.transmission}</p>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>KM driven *</span>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' onChange={handleInputChange} name="km" type="number" />
                            <p className='text-red-600 text-sm'>{errors?.km}</p>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>No. of Owners *</span>
                            <div className='w-full h-10  flex gap-3'>
                                <button name="no_of_owners" type="checkbox" onClick={handleInputChange} value="1st" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>1st</button>
                                <button name="no_of_owners" type="checkbox" onClick={handleInputChange} value="2nd" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>2nd</button>
                                <button name="no_of_owners" type="checkbox" onClick={handleInputChange} value="3rd" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>3rd</button>
                                <button name="no_of_owners" type="checkbox" onClick={handleInputChange} value="4th" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>4th</button>
                                <button name="no_of_owners" type="checkbox" onClick={handleInputChange} value="4+" className='h-10 p-2 border border-gray-500 rounded hover:bg-blue-400 hover:text-white'>4+</button>
                            </div>
                            <p className='text-red-600 text-sm'>{errors?.no_of_owners}</p>
                        </div>
                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-sm'>Ad title *</span>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' onChange={handleInputChange} name='title' type="text" />
                            <p className='text-xs text-gray-400'>Mention the key features of your item (e.g. brand, model, age, type)</p>
                            <p className='text-red-600 text-sm'>{errors?.title}</p>
                        </div>
                        <div className='w-full h-52 flex flex-col gap-2'>
                            <span className='text-black text-sm'>Description *</span>
                            <textarea className='h-32 w-[50%] rounded border-2 border-gray-800 resize-none' onChange={handleInputChange} name='description'></textarea>
                            <p className='text-red-600 text-sm'>{errors?.description}</p>
                            <p className='text-xs text-gray-400'>Include condition, features, and reason for selling</p>
                        </div>

                        <div className='w-full h-24  flex flex-col gap-2'>
                            <span className='text-black text-xl font-bold'>SET A PRICE{productData?.images?.length}</span>
                            <span className='text-black text-sm'>Price *</span>
                            <input className='h-12 w-[50%] rounded border-2 border-gray-800' onChange={handleInputChange} name='price' type="number" placeholder='₹ |' />
                            <p className='text-red-600 text-sm'>{errors?.price}</p>
                        </div>
                        <UploadPhotos setImages={setImages} images={images} setProductData={setProductData} />
                        <p className='text-red-600 text-sm'>{errors?.images}</p>
                        <div className='w-full h-auto  flex flex-col gap-1'>
                            <label htmlFor="stateDropdown">State *</label>
                            <select className='h-12 w-[50%] rounded border-2 border-gray-800'
                                id="stateDropdown"
                                onChange={(e) => handleStateChange(e.target.value)}
                                value={selectedState}
                            >
                                <option value="">Select a state</option>
                                {states.map((state) => (
                                    <option key={state.state_name} value={state.state_name}>
                                        {state.state_name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        {selectedState && (
                            <div className='w-full h-auto  flex flex-col gap-1'>
                                <label htmlFor="cityDropdown">City *</label>
                                <select className='h-12 w-[50%] rounded border-2 border-gray-800'
                                    id="cityDropdown"
                                    onChange={(e) => handleCityChange(e.target.value)}
                                    value={selectedCity}
                                >
                                    <option value="">Select a City</option>
                                    {cities.map((city) => (
                                        <option key={city.city_name} value={city.city_name}>
                                            {city.city_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <p className='text-red-600 text-sm'>{errors?.state ? errors?.state : errors?.city ? errors?.city : ""}</p>
                        <button onClick={handlePostNow} className='h-10 w-28 bg-slate-400 mt-10 rounded font-bold text-gray-500'>POST NOW</button>

                    </div>
                </div >
            </div >
        </>
    )
}