import { useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'

export const UploadPhotos = ({ setImages, images, setProductData }) => {

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];

        console.log(file);
        if (index <= images.length - 1) {

            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);

        } else {

            if (file) {
                const newImages = [...images];
                newImages.push(file);
                setImages(newImages);

            }
        }
    };

    useEffect(() => {
        setProductData((prevData) => {
            return ({
                ...prevData,
                ["images"]: images
            })
        })

    }, [images])


    return (
        <div className='w-full h-[700px]  flex flex-col justify-center gap-2'>
            <span className='text-xl font-bold mt-4'>UPLOAD UP TO 20 PHOTOS</span>
            <div className='w-full h-28  flex gap-2'>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[0] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}
                    {images && images[0] && (
                        <div className='relative flex justify-center w-full h-full'>
                            <img className='h-full w-full' src={URL.createObjectURL(images[0])} alt="" />
                            <span className='absolute top-[70%]  z-20 h-7 w-[80%] bg-cyan-400 text-black flex justify-center items-center  font-bold'>
                                COVER
                            </span>
                        </div>
                    )}

                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(0, event)}
                    />
                </label>

                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[0] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[0] && !images[1] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[1] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[1])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(1, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[1] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[1] && !images[2] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[2] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[2])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(2, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[2] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[2] && !images[3] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[3] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[3])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(3, event)}
                    />
                </label>



            </div>
            <div className='w-full h-28  flex gap-2'>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[3] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[3] && !images[4] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[4] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[4])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(4, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[4] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[4] && !images[5] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[5] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[5])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(5, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[5] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[5] && !images[6] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[6] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[6])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(6, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[6] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[6] && !images[7] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[7] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[7])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(7, event)}
                    />
                </label>
            </div>
            <div className='w-full h-28  flex gap-2'>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[7] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[7] && !images[8] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[8] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[8])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(8, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[8] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[8] && !images[9] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[9] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[9])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(9, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[9] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[9] && !images[10] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[10] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[10])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(10, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[10] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[10] && !images[11] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[11] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[11])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(11, event)}
                    />
                </label>
            </div>
            <div className='w-full h-28  flex gap-2'>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[11] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[11] && !images[12] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[12] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[12])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(12, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[12] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[12] && !images[13] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[13] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[13])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(13, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[13] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[13] && !images[14] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[14] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[14])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(14, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[14] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[14] && !images[15] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[15] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[15])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(15, event)}
                    />
                </label>
            </div>
            <div className='w-full h-28  flex gap-2'>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[15] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[15] && !images[16] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[16] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[16])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(16, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[16] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[16] && !images[17] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[17] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[17])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(17, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[17] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[17] && !images[18] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[18] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[18])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(18, event)}
                    />
                </label>
                <label className='w-28 h-28 border border-black flex flex-col justify-center items-center cursor-pointer'>
                    {!images[18] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />

                        </>
                    )}
                    {images[18] && !images[19] && (
                        <>
                            <AiOutlineCamera className='text-2xl' />
                            <p>Add Photo</p>
                        </>
                    )}

                    {images && images[19] && (
                        <img className='h-full w-full' src={URL.createObjectURL(images[19])} alt="" />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(event) => handleImageChange(19, event)}
                    />
                </label>

            </div>
        </div>
    )
}