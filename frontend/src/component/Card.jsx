import { Link } from "react-router-dom"
import React from 'react'
import { FiCalendar, FiClock, FiMapPin, } from "react-icons/fi"
// import  FaRupeeSign from 'react-icons/fa6'

const Card = ({ data }) => {
  const { _id,companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, GSTIN } = data;

  return (

    <section className='card'>
      <Link to={`/Job/${_id}`} className="flex gap-2 flex-col  sm:flex-row items-start">
        <img className="object-cover h-12 w-20" src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="ext-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap fap-2 mb-2">
            <span className="flex items-center gap-2"><FiMapPin />{jobLocation}</span>
            <span className="flex items-center gap-2"><FiClock />{employmentType}</span>
            {/* <span className="flex items-center gap-2"><FaRupeeSign />{minPrice}</span> */}
            <span className="flex items-center gap-2"><FiCalendar />{postingDate}</span>

          </div>
          <p className="text-base text-primary">{description}</p>
          <div>
            <h4 className="flex items-center gap-2">Company Registration No:<span className="bg-dark-600 text-back font-medium">{GSTIN}</span></h4>
            <button className="bg-cyan-700 hover:bg-red-200 text-white py-2 px-4 rounded-full" >
              Apply
            </button>

          </div>




        </div>
      </Link>
    </section>

  )
}

export default Card
