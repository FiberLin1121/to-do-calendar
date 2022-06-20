import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoginModalOpen: false,
    isLoading: false,
    userId: sessionStorage.getItem("userId") || "",
    userName: sessionStorage.getItem("userName") || "",
    token: sessionStorage.getItem("token") || "",
    firstColor: sessionStorage.getItem("firstColor") || "",
    secondColor: sessionStorage.getItem("secondColor") || "",
    thirdColor: sessionStorage.getItem("thirdColor") || "",
    fourthColor: sessionStorage.getItem("fourthColor") || "",
  },
  mutations: {
    isLoginModalOpen(state, status) {
      state.isLoginModalOpen = status;
    },
    isLoading(state, status) {
      state.isLoading = status;
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
    setFirstColor(state, firstColor) {
      state.firstColor = firstColor;
    },
    setSecondColor(state, secondColor) {
      state.secondColor = secondColor;
    },
    setThirdColor(state, thirdColor) {
      state.thirdColor = thirdColor;
    },
    setFourthColor(state, fourthColor) {
      state.fourthColor = fourthColor;
    },
    setStoreToSession(state) {
      sessionStorage.setItem("userId", state.userId);
      sessionStorage.setItem("userName", state.userName);
      sessionStorage.setItem("token", state.token);
    },
    removeSession(state) {
      sessionStorage.removeItem("userId", state.userId);
      sessionStorage.removeItem("userName", state.userName);
      sessionStorage.removeItem("token", state.token);
    },
  },
});
