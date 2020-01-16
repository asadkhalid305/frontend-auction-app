import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3011"
});

instance.interceptors.response.use(
  function (response) {
    // if (response.status === 200) {
    //   return response;
    // }
    // else if (2xx === response.status) {
    // console.log('abc')
    // }
    return response;
  },
  function (error) {
    //wrong header data,
    if (400 === error.response.status) {
      console.log("bad request");
      return error.response;
    }
    //login, new password, change password (new password), all add, all update
    else if (401 === error.response.status) {
      console.log("unautherized");
      localStorage.clear();
      window.location.assign("/");
    }
    // //all delete
    else if (403 === error.response.status) {
      console.log("forbidden");
      return error.response;
    }
    //email verification, code verification, change password (old password)
    else if (404 === error.response.status) {
      console.log("not found");
      return error.response;
    } else {
      console.log("Uncaucht error");
      return Promise.reject(error);
    }
  }
);

export default instance;