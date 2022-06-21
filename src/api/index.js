import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "/api",
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
        // case 404:
        //   alert("你要找的頁面不存在");
        //   // go to 404 page
        //   break;
        case 500:
          alert("程式發生問題");
          // go to 500 page
          break;
        // default:
        //   alert(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

// User 相關的 api
export const apiUserQuery = (userId) =>
  instance.get(`/users/${userId}`);
  
export const apiUserRegister = (email, name, password) =>
  instance.post(`/users/register`, {
    email: email,
    name: name,
    password: password,
  });

export const apiUserLogin = (email, password) =>
  instance.post(`/users/login`, {
    email: email,
    password: password,
  });

export const apiLabelSettingUpdate = (userId, firstColor, secondColor, thirdColor, fourthColor) =>
  instance.patch(`/users/${userId}`, {
    op: "replace",
    path: "/labelSetting",
    value: {
      firstColor: firstColor,
      secondColor: secondColor,
      thirdColor: thirdColor,
      fourthColor: fourthColor,
    },
  });

  export const apiUserNameUpdate = (userId, name) =>
  instance.patch(`/users/${userId}`, {
    op: "replace",
    path: "/name",
    value: {
      name: name,
    },
  });

  export const apiUserPasswordUpdate = (userId, oldPassword, newPassword) =>
  instance.patch(`/users/${userId}`, {
    op: "replace",
    path: "/password",
    value: {
      oldPassword: oldPassword,
      newPassword: newPassword
    },
  });

// Habits 相關的 api
export const apiHabitsQuery = (userId) =>
  instance.get(`/users/${userId}/habits`);

export const apiHabitsOrderUpdate = (userId, habitsId, habitList) =>
  instance.put(`/users/${userId}/habits`, {
    habitsId: habitsId,
    habitList: habitList,
  });

export const apiHabitAdd = (userId, name, checkColor) =>
  instance.patch(`/users/${userId}/habits`, {
    op: "add",
    path: "/habitList",
    value: {
      name: name,
      checkColor: checkColor,
    },
  });

export const apiHabitUpdate = (userId, habitId, name, checkColor) =>
  instance.patch(`/users/${userId}/habits`, {
    op: "replace",
    path: "/habitList",
    value: {
      habitId: habitId,
      name: name,
      checkColor: checkColor,
    },
  });

export const apiHabitDelete = (userId, habitId) =>
  instance.patch(`/users/${userId}/habits`, {
    op: "remove",
    path: "/habitList",
    value: {
      habitId: habitId,
    },
  });

// HabitTracker 相關的 api
export const apiHabitTrackerQuery = (userId, habitId, year) =>
  instance.get(
    `/users/${userId}/habitTrackers?habitId=${habitId}&year=${year}`
  );

export const apiPickedDayAdd = (userId, habitId, year, day) =>
  instance.patch(
    `/users/${userId}/habitTrackers?habitId=${habitId}&year=${year}`,
    {
      op: "add",
      path: "/pickedDays",
      value: {
        id: day.id,
        date: day.date,
      },
    }
  );

export const apiPickedDayRemove = (userId, habitId, year, day) =>
  instance.patch(
    `/users/${userId}/habitTrackers?habitId=${habitId}&year=${year}`,
    {
      op: "remove",
      path: "/pickedDays",
      value: {
        id: day.id,
        date: day.date,
      },
    }
  );

// TodoList 相關的 api
export const apiLabelDefaultValueQuery = () =>
  instance.get(`/labels`);

export const apiTodoListQuery = (userId, date) =>
  instance.get(`/users/${userId}/todoLists?date=${date}`);

export const apiTodoListOrderUpdate = (userId, date, todoListId, todoList, doneList) =>
instance.put(`/users/${userId}/todoLists?date=${date}`, {
    todoListId: todoListId,
    todoList: todoList,
    doneList: doneList,
  });

export const apiTaskAdd = (userId, date, name, labelType) =>
  instance.patch(`/users/${userId}/todoLists?date=${date}`, {
    op: "add",
    path: "/todoList",
    value: {
      name: name,
      labelType: labelType,
    },
  });

  export const apiTaskUpdate = (userId, date, path, taskId, name, labelType) =>
  instance.patch(`/users/${userId}/todoLists?date=${date}`, {
    op: "replace",
    path: "/"+ path,
    value: {
      taskId: taskId,
      name: name,
      labelType: labelType,
    },
  });

  export const apiTaskDelete = (userId, date, path, taskId) =>
  instance.patch(`/users/${userId}/todoLists?date=${date}`, {
    op: "remove",
    path: "/"+ path,
    value: {
      taskId: taskId,
    },
  });