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
        <div class="modal-header bg-primary text-white">
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
                placeholder="請輸入帳號"
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
            class="btn btn-primary text-white"
            @click="sendUserLogin"
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
      }else{
        this.accountError = true;
        this.accountErrorMsg = "帳號未填";
      }
    },
    password() {
      if (this.password) {
        this.passwordError = false;
        this.passwordErrorMsg = "";
      }else{
        this.passwordError = true;
        this.passwordErrorMsg = "密碼未填";
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
    sendUserLogin() {
      let self = this;
      let result = true;
      if (self.checkLoginInput()) {
        //send login API to server
        if (result) {
          self.$store.commit("isLoginModalOpen", false);
          self.$store.commit("setUserId", "user01");
          self.$store.commit("setUserName", "test");
          self.$store.commit("setToken", "123");
          self.$store.commit("setStoreToSession");
          self.$store.commit("isLoading", true);
          setTimeout(() => {
            self.$router.push("innerPage/todoLists");
          }, 1000);
        } else {
          self.serverErrorMsg = "帳號或密碼錯誤";
        }
      }
    },
    resetForm() {
      let self = this;
      self.account = "";
      self.accountError = false;
      self.accountErrorMsg = "";
      self.password = "";
      self.passwordError = false;
      self.passwordErrorMsg = "";
      self.serverErrorMsg = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
