import { useParams } from 'next/navigation'
import React from 'react'

const JobDetails = () => {
    const id = useParams();
    console.log(id)
  return (
    <div>
      Jobdetails:${id}
    </div>
  )
}

export default JobDetails
