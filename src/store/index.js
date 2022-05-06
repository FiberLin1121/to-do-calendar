import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoginModalOpen: false,
    userId: sessionStorage.getItem("userId") || "",
    userName: sessionStorage.getItem("userName") || "",
    token: sessionStorage.getItem("token") || "",
  },
  mutations: {
    isLoginModalOpen(state, status) {
      state.isLoginModalOpen = status;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setToken(state, token) {
      state.token = token;
    },
    setStoreToSession(state) {
      sessionStorage.setItem("userId", state.userId);
      sessionStorage.setItem("userName", state.userName);
      sessionStorage.setItem("token", state.token);
    },
    removeSession(state) {
      sessionStorage.getItem("userId", state.userId);
      sessionStorage.getItem("userName", state.userName);
      sessionStorage.getItem("token", state.token);
    },
  },
});
