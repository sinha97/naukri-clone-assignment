import {API} from '../../baseApi';

export const signin = user => {
    return fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const getAllJobs = (token) => {
    return fetch(`${API}/recruiters/jobs`, {
        method: "GET",
        headers:{
            Authorization:token
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getAllAppliedCandidate = (token,jobId) => {
    return fetch(`${API}/recruiters/jobs/${jobId}/candidates`, {
        method: "GET",
        headers:{
            Authorization:token
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

  export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem('loggedInUser')) {
        return JSON.parse(localStorage.getItem('loggedInUser'))
    } else {
        return false
    }
};