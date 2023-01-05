import React,{useState} from "react";
import AllCandidate from '../allCondidate';
import {getAllAppliedCandidate,isAuthenticated} from '../helper'

const JobCard = ({ jobData }) => {
  const [openModal,setOpenModal] = useState(false)
  const [error, setError] = useState(false);
  const [infoList,setInfoList] = useState([])


  const jobTitle = jobData ? jobData.title : "";
  const jobDescription = jobData ? jobData.description : "";
  const joblocation = jobData ? jobData.location : "New Delhi";

  const handleViewApplication=()=>{
    if(openModal){
      setOpenModal(false)
    }
    getAllAppliedCandidate(isAuthenticated().token,jobData.id).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        if(Object.prototype.hasOwnProperty.call(data,'data')){
          setInfoList(data.data);
          setOpenModal(true)
        }else{
          setInfoList([]);
          setOpenModal(true)
        }
      }
    });
  }

  return (
      <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{jobDescription}</p>
        <div className="card-body">
          <p>
          {joblocation}
          </p>
          <button onClick={handleViewApplication}>View Applications</button>
        </div>
      </div>
    </div>
    {openModal && <AllCandidate infoList={infoList} setOpenModal={setOpenModal}/>}
    </>
  );
};

export default JobCard;
