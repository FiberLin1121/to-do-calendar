<template>
  <div
    class="modal fade"
    id="userEditModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="userEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-fourth text-white">
          <h5 class="modal-title">編輯個人資料</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeUserEditModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="text-left">
            <div class="form-group">
              <label for="inputAccount">帳號</label>
              <input
                type="text"
                class="form-control"
                v-model="userId"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="inputEmail1">暱稱</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': nameError }"
                placeholder="請輸入暱稱"
                v-model="userName"
              />
              <div class="error-msg">{{ nameErrorMsg }}</div>
            </div>
            
            <div class="form-group">
              <label for="inputPassword">重設密碼（非必填）</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': passwordError }"
                placeholder="請輸入新的密碼"
                v-model="password"
              />
              <div class="error-msg">{{ passwordErrorMsg }}</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeUserEditModal">取消</button>
          <button
            type="submit"
            class="btn btn-fourth text-white"
            @click="submitEvent"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "userEditModal",
  data() {
    return {
      nameError: false,
      nameErrorMsg: "",
      accountError: false,
      accountErrorMsg: "",
      password: "",
      passwordError: false,
      passwordErrorMsg: "",
      serverErrorMsg: "",
    };
  },
  computed: {
    ...mapState(["userId", "userName"]),
  },
  watch: {
    userId() {
      if (this.userId) {
        this.accountError = false;
        this.accountErrorMsg = "";
      } else {
        this.accountError = true;
        this.accountErrorMsg = "帳號未填";
      }
    },
    userName() {
      if (this.userName) {
        this.nameError = false;
        this.nameErrorMsg = "";
      } else {
        this.nameError = true;
        this.nameErrorMsg = "暱稱未填";
      }
    },
  },
  methods: {
    closeUserEditModal() {
      let self = this;
      self.resetForm();
      $("#userEditModal").modal("hide");
    },
    checkInput() {
      let self = this;
      let validity = true;
      if (!self.userName) {
        self.nameError = true;
        self.nameErrorMsg = "用戶名未填";
        validity = false;
      }
      if (!self.userId) {
        self.accountError = true;
        self.accountErrorMsg = "帳號未填";
        validity = false;
      }
      return validity;
    },
    resetForm() {
      let self = this;
      self.nameError = false;
      self.nameErrorMsg = "";
      self.accountError = false;
      self.accountErrorMsg = "";
      self.password = "";
      self.passwordError = false;
      self.passwordErrorMsg = "";
      self.serverErrorMsg = "";
    },
    submitEvent() {
      let self = this;
      if (self.checkInput()) {
        self.$emit("submitEvent");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
