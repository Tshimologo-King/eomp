import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    // user: (state) => {
    //   return state.user
    // }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
  actions: {
    verify: async () => {
      const response = await fetch(
        "https://node-eom-2.herokuapp.com/users/verify",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    },
    // takes in user input and sends a get request to the server/database and retrieves all user data
    login: async (context, payload) => {
      const { email, password } = payload;
      fetch("https://node-eom-2.herokuapp.com/users/login", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("user", data[0]));
    },
    // takes in user input and sends a post request to the server/database and adds all user data
    register: async (context, payload) => {
      const { full_name, email, password, phone_number } = payload;
      fetch("https://node-eom-2.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          password: password,
          phone_number: phone_number,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("user", json));
    },
  },
  modules: {},
});
