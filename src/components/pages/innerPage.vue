<template>
  <section class="card text-center">
    <!-- header -->
    <div class="card-header">
      <!-- dropdown -->
      <div class="dropdown text-right">
        <button
          class="btn btn-first dropdown-toggle text-white"
          type="button"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-expanded="false"
          style="width: 158px"
        >
          <font-awesome-icon icon="fa-solid fa-gear" /> 設定
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenu"
        >
          <button
            class="dropdown-item text-secondary"
            type="button"
            @click="openUserEditModal"
          >
            個人資料
          </button>
          <button class="dropdown-item text-secondary" type="button">
            標籤顏色
          </button>
          <div class="dropdown-divider"></div>
          <button
            class="dropdown-item text-secondary"
            type="button"
            @click="logout"
          >
            登出
          </button>
        </div>
      </div>
      <!-- /dropdown -->

      <!-- tabs -->
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link class="nav-link" to="/index"
            ><font-awesome-icon icon="fa-solid fa-house-chimney"
          /></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/habitTracker"
            ><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Habit
            trackers</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/todoLists"
            ><font-awesome-icon icon="fa-solid fa-list-check" /> Todo
            lists</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/notes"
            ><font-awesome-icon icon="fa-solid fa-note-sticky" />
            Notes</router-link
          >
        </li>
      </ul>
      <!-- /tabs -->
    </div>
    <!-- /header -->

    <!-- body -->
    <section class="card-body" style="height: calc(80vh)">
      <h1 class="card-title"></h1>
      <router-view />
    </section>
    <!-- /body -->

    <!-- modal section -->
    <user-edit-modal @submitEvent="sendEditUser"></user-edit-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import userEditModal from "../modal/userEditModal.vue";

export default {
  name: "innerPage",
  components: {
    "user-edit-modal": userEditModal,
  },
  data() {
    return {};
  },
  methods: {
    openUserEditModal() {
      $("#userEditModal").modal({ backdrop: "static", keyboard: false });
    },
    sendEditUser(){
      console.log("sendEditUser");
    },
    logout() {
      let self = this;
      self.$store.commit("userId", "");
      self.$store.commit("userName", "");
      self.$store.commit("token", "");
      self.$store.commit("removeSession");
      self.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #5fc6d4;
  background-color: rgb(165 222 229 / 21%);
}
</style>
