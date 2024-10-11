import React, { useState } from 'react';
import { useLoaderData ,useParams} from 'react-router-dom';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const Update = () => {
    const {id} = useParams();
    const { _id, jobTitle, companyName,
        minprice, maxPrice, GSTIN, salaryType, jobLocation, experienceLevel,
        employmentType, postingDate, companyLogo, PostedBy, description,
        skill
    } = useLoaderData();
    const [selectedOption, setselectedOption] = useState();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skill = selectedOption;
        // console.log(data);
        fetch(`http://localhost:3000/update-job/${id}`, {
            method: "PATCH",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                if (result.acknowledged === true) {
                    alert("Job updated Sucessfully");
                }
                reset();


            })
        console.log(data)

    };
    const options = [
        { value: "javscript", label: "Javascript" },
        { value: "react.js", label: "React.js" },
        { value: "C++", label: "C++" },
        { value: "DSA", label: "DSA" },
        { value: "Express.js", label: "Express.js" },
        { value: "MongoDb", label: "MongoDb" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "Node", label: "Node" },
    
      ]


    return (
        <div className='mx-w-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* 1st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={jobTitle}
                                {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" defaultValue={companyName}
                                {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>
                    {/* second row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" defaultValue={minprice}
                                {...register("minprice")} className='create-job-input' />
                        </div>

                        <div className='lg:w1/2 w-full' >
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" defaultValue={maxPrice}
                                {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>GSTIN Number</label>
                            <input type="text" placeholder={GSTIN}
                                {...register("GSTIN")} className='create-job-input' />
                        </div>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>salaryType</label>
                            <select {...register("salaryType", { required: true })}>
                                <option value={salaryType}>Choose your Salary</option>
                                <option value={salaryType}>Hourly</option>
                                <option value={salaryType}>Monthly</option>
                                <option value={salaryType}>Yearly</option>

                            </select>
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" defaultValue={jobLocation}
                                {...register("jobLocation")} className='create-job-input' />
                        </div>
                        <div className='lg:w1/2 w-full' >
                            <label className='block mb-2 text-lg'>Experience</label>
                            <select {...register("experienceLevel", { required: true })}>
                                <option value={experienceLevel}>Fresher</option>
                                <option value={experienceLevel}>1 Year</option>
                                <option value={experienceLevel}>2 Year</option>
                                <option value={experienceLevel}>More then 3</option>
                            </select>
                        </div>
                    </div>
                    {/* 5th row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Type</label>
                            <select {...register("employmentType", { required: true })}>
                                <option value={employmentType}>Part Time</option>
                                <option value={employmentType}>Full-Time</option>
                                <option value={employmentType}>Internship</option>
                            </select>
                        </div>

                        <div className='lg:w1/2 w-full' >

                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="date" placeholder={postingDate}
                                {...register("postingDate")} className='create-job-input' />
                        </div>
                    </div>
                    {/* required skill */}
                    <div>
                        <label className='block text-lg'>Required Skill</label>
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setselectedOption}
                            options={options}
                            isMulti
                            className='create-job-input py-4'
                        />
                    </div>
                    {/* 6row */}
                    <div className='create-job-flex'>
                        <div className='lg:w1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder={companyLogo}
                                {...register("companyLogo")} className='create-job-input'
                            />

                        </div>

                        <div className='lg:w1/2 w-full' >
                            <label className='block mb-2 text-lg'>Job Posted by</label>
                            <input type="email" defaultValue={PostedBy}
                                {...register("PostedBy")} className='create-job ' />
                        </div>
                    </div>

                    {/* 7th row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea className='w-full pl-3 py-1.5 focus:outline-none'
                            rows={6}
                            placeholder={description}{...register('description')} />

                    </div>




                    <input type='submit' className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded' />
                </form>
            </div>
        </div>
    )
}

export default Update
