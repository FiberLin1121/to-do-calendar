import axios from "axios";
import store from "../store";
import router from "../router";


// 使用 axios.create 建立 axios instance
const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
  //   withCredentials: false, // default
});


//設置 request 攔截器
instance.interceptors.request.use(
  function (config) {
    if (store.state.token) {
      config.headers.Authorization = "Bearer " + store.state.token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//設置 response 攔截器
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
            router.push("/");
            store.commit("clearStore");
            store.commit("removeSession");
            store.commit("isLoginModalOpen", true);
          break;
        case 403:
            router.push("/innerPage/todoLists");
            alert("您的權限不足");
          break;
        case 500:
          alert("程式發生問題");
          break;
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

// 宣告 API 方法
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

  // Notes 相關的 api
  export const apiNotesQuery = (userId) =>
  instance.get(`/users/${userId}/notes`);

  export const apiNotesOrderUpdate = (userId, list1, list2, list3, list4) =>
  instance.put(`/users/${userId}/notes`, {
      userId: userId,
      list1: list1,
      list2: list2,
      list3: list3,
      list4: list4,
    });

  export const apiNoteAdd = (userId, name, content, bgColor, tapeStyle) =>
  instance.patch(`/users/${userId}/notes`, {
    op: "add",
    path: "/list1",
    value: {
      name: name,
      content: content,
      bgColor: bgColor,
      tapeStyle: tapeStyle,
    },
  });

  export const apiNoteUpdate = (userId, path, noteId, name, content, bgColor, tapeStyle) =>
  instance.patch(`/users/${userId}/notes`, {
    op: "replace",
    path: "/"+ path,
    value: {
      noteId: noteId,
      name: name,
      path: path,
      content: content,
      bgColor: bgColor,
      tapeStyle: tapeStyle,
    },
  });

  export const apiNoteDelete = (userId, path, noteId) =>
  instance.patch(`/users/${userId}/notes`, {
    op: "remove",
    path: "/"+ path,
    value: {
      noteId: noteId,
    },
  });