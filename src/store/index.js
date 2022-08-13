import { createStore } from "vuex";
import { auth } from "./auth.module";
const store = createStore({
  modules: {
    auth,
  },
});

export default createStore({
  state: { status: null, user: null },
  getters: {},
  mutations: {
    // loginSuccess,
    // loginFailure,
    // logout,
    // registerSuccess,
  },
  actions: {
    // login,
    // logout,
    // register,
  },
  modules: {},
});
