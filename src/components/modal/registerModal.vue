<template>
  <div
    class="modal fade"
    id="registerModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="registerModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-second text-white">
          <h5 class="modal-title">註冊</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeRegisterModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="inputAccount">帳號</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': accountError }"
                placeholder="請輸入 Email"
                v-model="account"
              />
              <div class="error-msg">{{ accountErrorMsg }}</div>
            </div>
            <div class="form-group">
              <label for="inputEmail1">名字</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': nameError }"
                placeholder="請輸入名字"
                v-model="name"
              />
              <div class="error-msg">{{ nameErrorMsg }}</div>
            </div>
            <div class="form-group">
              <label for="inputPassword">密碼</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': passwordError }"
                placeholder="請輸入密碼"
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
            @click="openLoginModal"
            >切換到登入</a
          >
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeRegisterModal"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-second text-white"
            @click="submitEvent"
          >
            註冊
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerModal",
  props: ["registerErrorMsg"],
  data() {
    return {
      account: "",
      accountError: false,
      accountErrorMsg: "",
      name: "",
      nameError: false,
      nameErrorMsg: "",
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
    name() {
      if (this.name) {
        this.nameError = false;
        this.nameErrorMsg = "";
      }
    },
    password() {
      if (this.password) {
        this.passwordError = false;
        this.passwordErrorMsg = "";
      }
    },
    registerErrorMsg() {
      this.serverErrorMsg = this.registerErrorMsg;
      if (this.serverErrorMsg) {
        this.accountError = true;
      }
    },
  },
  methods: {
    openLoginModal() {
      let self = this;
      self.$store.commit("isLoginModalOpen", true);
    },
    closeRegisterModal() {
      let self = this;
      self.resetForm();
      $("#registerModal").modal("hide");
    },
    checkRegisterInput() {
      let self = this;
      let validity = true;

      if (!self.name) {
        self.nameError = true;
        self.nameErrorMsg = "暱稱未填";
        validity = false;
      }
      if (!self.account) {
        self.accountError = true;
        self.accountErrorMsg = "帳號未填";
        validity = false;
      }

      let emailExp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$");
      if (!self.account.match(emailExp)) {
        self.accountError = true;
        self.accountErrorMsg = "Email 格式不符";
        validity = false;
      }

      if (!self.password) {
        self.passwordError = true;
        self.passwordErrorMsg = "密碼未填";
        validity = false;
      }
      if (validity) {
        if (self.password.length < 8 || self.password.length > 30) {
          self.passwordError = true;
          self.passwordErrorMsg = "密碼長度必須為8-30碼";
          validity = false;
        }
      }
      if (validity) {
        let passwordExp = new RegExp(
          /^(?=[0-9a-zA-Z]*\d)(?=[0-9a-zA-Z]*[a-zA-Z])[0-9a-zA-Z]{8,30}$/g
        );
        if (!self.password.match(passwordExp)) {
          self.passwordError = true;
          self.passwordErrorMsg = "密碼必須包含英數字";
          validity = false;
        }
      }
      return validity;
    },
    resetForm() {
      let self = this;
      setTimeout(() => {
        self.name = "";
        self.nameError = false;
        self.nameErrorMsg = "";
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
      let createItem = {
        account: self.account,
        name: self.name,
        password: self.password,
      };
      if (self.checkRegisterInput()) {
        self.$emit("submitEvent", createItem);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
