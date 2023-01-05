import React, { useState, useEffect } from "react";
import { getAllJobs, isAuthenticated } from "../helper";
import JobCard from "./jobCard";

const AllJobPage = () => {
  const [jobData, setJobData] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getAllJobs(isAuthenticated().token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setJobData(data.data.data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);


  return (
    <>
      <p className='job_heading'>Job posted by you</p>
    <div className="row text-center">
      <div className="row">
        {jobData.length &&
          jobData.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <JobCard jobData={product} />
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

export default AllJobPage;
