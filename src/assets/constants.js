import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3011/"
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //wrong header data,
    if (400 === error.response.status) {
      console.log("bad request");
      Promise.reject(error);
    }
    //login, new password, change password (new password), all add, all update
    else if (401 === error.response.status) {
      console.log("unautherized");
      return Promise.reject(error);
      // localStorage.clear();
      // window.location.assign("/");
    }
    // //all delete
    else if (403 === error.response.status) {
      console.log("forbidden");
      return Promise.reject(error);
    }
    //email verification, code verification, change password (old password)
    else if (404 === error.response.status) {
      console.log("not found");
      return Promise.reject(error);
    } else {
      console.log("Uncaucht error");
      return Promise.reject(error);
    }
  }
);

export default instance;