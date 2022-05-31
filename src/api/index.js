import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
  //   withCredentials: false, // default
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          alert("你要找的頁面不存在");
          // go to 404 page
          break;
        case 500:
          console.log("程式發生問題");
          // go to 500 page
          break;
        default:
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

// Habits 相關的 api
export const apiHabitsQuery = (userId) =>
  instance.get(`/users/${userId}/habits`);

// HabitTracker 相關的 api
export const apiHabitTrackerQuery = (userId, habitId, year) =>
instance.get(`/users/${userId}/habitTracker?habitId=${habitId}&year=${year}`);