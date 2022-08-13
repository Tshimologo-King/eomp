import axios from "axios";
const fuel_and_go = "http://localhost:8080/auth/";
class verify {
  async login(user) {
    return axios
      .post(fuel_and_go + "Login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(fuel_and_go + "Register", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new verify();
