import React from 'react'
import { useForm } from "react-hook-form"

const PostJob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) //


    return (
        <div className='max-w-2xl container mx-auto xl:px-24 px-4'>
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                    <div className='lg:w1/2 w-full'>
                    <label >Job Title</label>

                    </div>
                </div>
                    
                    <input type='sumbit'/>
                </form>

            </div>
        </div>
    )
}

export default PostJob
