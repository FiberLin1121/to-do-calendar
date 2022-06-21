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

          <button
            class="dropdown-item text-secondary"
            type="button"
            @click="openLabelSettingModal"
          >
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
    <section class="card-body box-shadow" style="height: calc(80vh)">
      <h1 class="card-title"></h1>
      <router-view />
    </section>
    <!-- /body -->

    <!-- modal section -->
    <user-edit-modal :user="copyUser" @submitEvent="sendEditUser">
    </user-edit-modal>
    <reset-password-modal
      :resetPasswordErrorMsg="resetPasswordErrorMsg"
      @submitEvent="sendResetPassword"
    ></reset-password-modal>
    <label-setting-modal
      :user="copyUser"
      @submitEvent="sendEditLabelSetting"
    ></label-setting-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import userEditModal from "../modal/userEditModal.vue";
import resetPasswordModal from "../modal/resetPasswordModal.vue";
import labelSettingModal from "../modal/labelSettingModal.vue";
import {
  apiLabelSettingUpdate,
  apiUserNameUpdate,
  apiUserPasswordUpdate,
} from "../../api/index.js";

export default {
  name: "innerPage",
  components: {
    "user-edit-modal": userEditModal,
    "reset-password-modal": resetPasswordModal,
    "label-setting-modal": labelSettingModal,
  },
  data() {
    return {
      user: {
        userId: this.$store.state.userId,
        email: this.$store.state.account,
        name: this.$store.state.userName,
        firstColor: this.$store.state.firstColor,
        secondColor: this.$store.state.secondColor,
        thirdColor: this.$store.state.thirdColor,
        fourthColor: this.$store.state.fourthColor,
      },
      copyUser: {},
      resetPasswordErrorMsg: "",
    };
  },
  methods: {
    openUserEditModal() {
      let self = this;
      self.copyUser = JSON.parse(JSON.stringify(self.user));
      console.log("user=" + JSON.stringify(self.user));
      $("#userEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openLabelSettingModal() {
      let self = this;
      self.copyUser = JSON.parse(JSON.stringify(self.user));
      $("#labelSettingModal").modal({ backdrop: "static", keyboard: false });
    },
    sendEditUser(editItem) {
      let self = this;
      apiUserNameUpdate(self.$store.state.userId, editItem.name).then((res) => {
        self.user.name = res.data.name;
        self.$store.commit("setUserName", res.data.name);
        sessionStorage.setItem("userName", res.data.name);
        $("#userEditModal").modal("hide");
      });
    },
    sendResetPassword(editItem) {
      console.log("sendResetPassword");
      let self = this;
      apiUserPasswordUpdate(
        self.$store.state.userId,
        editItem.oldPassword,
        editItem.newPassword
      )
        .then((res) => {
          $("#resetPasswordModal").modal("hide");
        })
        .catch((err) => {
          self.resetPasswordErrorMsg = err.response.data;
        });
    },
    sendEditLabelSetting(editItem) {
      let self = this;
      apiLabelSettingUpdate(
        self.$store.state.userId,
        editItem.firstColor,
        editItem.secondColor,
        editItem.thirdColor,
        editItem.fourthColor
      ).then((res) => {
        self.user = res.data;
        self.$store.commit("setFirstColor", res.data.labelSetting.firstColor);
        self.$store.commit("setSecondColor", res.data.labelSetting.secondColor);
        self.$store.commit("setThirdColor", res.data.labelSetting.thirdColor);
        self.$store.commit("setFourthColor", res.data.labelSetting.fourthColor);
        $("#labelSettingModal").modal("hide");
      });
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

.box-shadow {
  box-shadow: 0px 3px 10px 1px #bed7da6b;
}
</style>
