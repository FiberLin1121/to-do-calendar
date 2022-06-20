<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-first text-white">
          <h5 class="modal-title">登入</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeLoginModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="InputAccount">帳號</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': accountError }"
                placeholder="請輸入 Email"
                required
                v-model="account"
              />
              <div class="error-msg">{{ accountErrorMsg }}</div>
            </div>

            <div class="form-group">
              <label for="InputPassword">密碼</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': passwordError }"
                placeholder="請輸入密碼"
                required
                v-model="password"
              />
              <div class="error-msg">{{ passwordErrorMsg }}</div>
            </div>
            <div class="error-msg">{{ serverErrorMsg }}</div>
          </form>
        </div>
        <div class="modal-footer">
          <a
            href="#"
            class="mr-auto"
            data-dismiss="modal"
            data-toggle="modal"
            @click="openRegisterModal"
            >切換到註冊</a
          >
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeLoginModal"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-first text-white"
            @click="submitEvent"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginModal",
  props: ["loginErrorMsg"],
  data() {
    return {
      account: "",
      accountError: false,
      accountErrorMsg: "",
      password: "",
      passwordError: false,
      passwordErrorMsg: "",
      serverErrorMsg: "",
    };
  },
  watch: {
    account() {
      if (this.account) {
        this.accountError = false;
        this.accountErrorMsg = "";
      }
    },
    password() {
      if (this.password) {
        this.passwordError = false;
        this.passwordErrorMsg = "";
      }
    },
    loginErrorMsg() {
      this.serverErrorMsg = this.loginErrorMsg;
      if (this.serverErrorMsg) {
        this.accountError = true;
        this.passwordError = true;
      }
    },
  },
  methods: {
    openRegisterModal() {
      let self = this;
      self.resetForm();
      self.$store.commit("isLoginModalOpen", false);
      $("#registerModal").modal({ backdrop: "static", keyboard: false });
    },
    closeLoginModal() {
      let self = this;
      self.resetForm();
      self.$store.commit("isLoginModalOpen", false);
    },
    checkLoginInput() {
      let self = this;
      let validity = true;
      if (!self.account) {
        self.accountError = true;
        self.accountErrorMsg = "帳號未填";
        validity = false;
      }
      if (!self.password) {
        self.passwordError = true;
        self.passwordErrorMsg = "密碼未填";
        validity = false;
      }
      return validity;
    },
    resetForm() {
      let self = this;
      setTimeout(() => {
      self.account = "";
      self.accountError = false;
      self.accountErrorMsg = "";
      self.password = "";
      self.passwordError = false;
      self.passwordErrorMsg = "";
      self.serverErrorMsg = "";
      }, 1000);
    },
    submitEvent() {
      let self = this;
      let queryItem = {
        account: self.account,
        password: self.password,
      };
      if (self.checkLoginInput()) {
        self.$emit("submitEvent", queryItem);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
