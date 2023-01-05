import React from "react";

const AllCandidate = ({ infoList, setOpenModal }) => {
  const closeApplicationPopup = () => {
    setOpenModal(false);
  };

  return (
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Applicants for this job
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeApplicationPopup}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>{infoList.length} applications</p>
        <div className="modal-body">
          {infoList.length ? (
            infoList.map((infodata, infoIndex) => (
              <div className="card" key={infoIndex}>
                <div className="card-body">
                  <button className="rounded-circle">
                    {infodata.name.charAt(0).toUpperCase()}
                  </button>
                  <h5 className="card-title">{infodata.name}</h5>
                  <p className="card-text">{infodata.email}</p>
                  <div className="card-body">
                    <p>Skills</p>
                    <p>{infodata.skills}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Application Avaliable</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCandidate;
