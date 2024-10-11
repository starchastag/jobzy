import React, { useEffect, useState } from 'react'
import Banner from '../component/Banner'
import Card from '../component/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import NewsLater from '../component/NewsLater';
import Footer from '../component/Footer';

const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;



  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then(res => res.json())
      .then(data => {
        //  console.log(data)
        setJobs(data);
        setIsLoading(false);
      })
    // console.log(jobs);

  }, []);

  //  console.log(jobs)

  //Handle input changes

  const [query, setQuery] = useState('');
  const handleInputChange = (e) => {
    setQuery(e.target.value)

  }

  //filter jobs by title
  const filterdItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filterdItems);

  //------ Radio filtering --------
  const handleChange = (e) => {
    setselectedCategory(e.target.value)
  }

  //---Button based filtering ----
  const handleClick = (e) => {
    selectedCategory(e.target.value)
  }

  //index range 
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterdItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  //function for the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  //main function 
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering input items
    if (query) {
      filteredJobs = filterdItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );

      console.log(filteredJobs);
    }


    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)

  }

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main contet */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* left side card */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />

        </div>

        {/* jobs cards */}
        <div className='col-span-2 bg-white rounded-sm'>
          {
            isLoading ? (<p className='font-medium'>Loading.....</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          }

          {/* pagination  */}
          {
            result.length > 0 ? (
              <div className='flex justify-center space-x-4 mt-4'>
                <button className='hover:underline' onClick={previousPage} disabled={currentPage === 1}>Previous</button>
                <span className='mx-2'>Page{currentPage} of {Math.ceil(filterdItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filterdItems.length / itemsPerPage)} className='hover:underline'>Next</button>

              </div>
            ) : ""
          }



        </div>
        {/* right sides */}
        <div className='bg-white p-4 rounded'><NewsLater /></div>

      </div>


    </div>
  );
};

export default Home;
