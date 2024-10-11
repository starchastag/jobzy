import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
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
    fetch("http://localhost:3000/post-job",{
      method: "POST",
      headers: {'content-type' : "application/json"},
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      if(result.acknowledged === true){
        alert("Job Posted Sucessfully");
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
              <input type="text" defaultValue={"Web Developer"}
                {...register("jobTitle")} className='create-job-input' />
            </div>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type="text" defaultValue={"Microsoft"}
                {...register("companyName")} className='create-job-input' />
            </div>
          </div>
          {/* second row */}
          <div className='create-job-flex'>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type="text" defaultValue="Rs.32K"
                {...register("minprice")} className='create-job-input' />
            </div>

            <div className='lg:w1/2 w-full' >
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type="text" defaultValue="Rs.52k"
                {...register("maxPrice")} className='create-job-input' />
            </div>
          </div>
          {/* 3rd row */}
          <div className='create-job-flex'>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>GSTIN Number</label>
              <input type="text" placeholder="KBNMG20415K"
                {...register("GSTIN")} className='create-job-input' />
            </div>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>salaryType</label>
              <select {...register("salaryType", { required: true })}>
                <option value="">Choose your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>

              </select>
            </div>
          </div>
          {/* 4th row */}
          <div className='create-job-flex'>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type="text" defaultValue="Banglore"
                {...register("jobLocation")} className='create-job-input' />
            </div>
            <div className='lg:w1/2 w-full' >
              <label className='block mb-2 text-lg'>Experience</label>
              <select {...register("experienceLevel", { required: true })}>
                <option value="Fresher">Fresher</option>
                <option value="1-2 years">1 Year</option>
                <option value="Monthly">2 Year</option>
                <option value="Yearly">More then 3</option>
              </select>
            </div>
          </div>
          {/* 5th row */}
          <div className='create-job-flex'>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Type</label>
              <select {...register("employmentType", { required: true })}>
                <option value="Part-Time">Part Time</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className='lg:w1/2 w-full' >

              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type="date" placeholder='2024-04-12'
                {...register("postingDate")} className='create-job-input' />
            </div>
          </div>
          {/* required skill */}
          <div>
            <label className='block text-lg'>Required Skill</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={selectedOption}
              options={options}
              isMulti
              className='create-job-input py-4'
            />
          </div>
          {/* 6row */}
          <div className='create-job-flex'>
            <div className='lg:w1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Logo</label>
              <input type="url" placeholder='Paste Your Company logo url:https://www.google/pic.jpg'
                {...register("companyLogo")} className='create-job-input'
              />

            </div>

            <div className='lg:w1/2 w-full' >
              <label className='block mb-2 text-lg'>Job Posted by</label>
              <input type="email" defaultValue="Shustarc786@gmail.com"
                {...register("PostedBy")} className='create-job ' />
            </div>
          </div>

          {/* 7th row */}
          <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none'
              rows={6}
              placeholder='Write job description '{...register('description')} />

          </div>




          <input type='submit' className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded' />
        </form>
      </div>
    </div>
  )
}

export default CreateJob;




