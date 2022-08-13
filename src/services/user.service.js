import axios from "axios";
//IMPORT AUTH-HEADER TO GET USER DETAILS FROM LOCAL STORAGE

import authHeader from "./auth-header";
const pageLink = "http://localhost:8080/";
class userServ {
  //Get all the contents of the app
  getContent() {
    return axios.get(fuel_and_go + "all");
  }

  //Get the user dashboard/profile
  getUserDashboard() {
    return axios.get(fuel_and_go + "user", { headers: authHeader() });
  }

  //Get admin dashboard
  getAdminDashboard() {
    return axios.get(fuel_and_go + "admin", { headers: authHeader() });
  }
}
export default new userServ();
