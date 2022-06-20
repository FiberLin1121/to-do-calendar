<template>
  <div
    class="modal fade"
    id="resetPasswordModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="resetPasswordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-fourth text-white">
          <h5 class="modal-title">重設密碼</h5>
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
              <label for="inputOldPassword">舊密碼</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': oldPasswordError }"
                placeholder="請輸入舊密碼"
                v-model="oldPassword"
              />
              <div class="error-msg">{{ oldPasswordErrorMsg }}</div>
            </div>
            <div class="form-group">
              <label for="inputNewPassword">新密碼</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': newPasswordError }"
                placeholder="請輸入新密碼"
                v-model="newPassword"
              />
              <div class="error-msg">{{ newPasswordErrorMsg }}</div>
            </div>

            <div class="form-group">
              <label for="inputConfirmPassword">確認密碼</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': confirmPasswordError }"
                placeholder="請再次輸入新密碼"
                v-model="confirmPassword"
              />
              <div class="error-msg">{{ confirmPasswordErrorMsg }}</div>
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
            @click="openUserEditModal"
            >修改個人資料</a
          >
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeUserEditModal"
          >
            取消
          </button>
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
export default {
  name: "resetPasswordModal",
  data() {
    return {
      oldPassword: "",
      oldPasswordError: false,
      oldPasswordErrorMsg: "",
      newPassword: "",
      newPasswordError: false,
      newPasswordErrorMsg: "",
      confirmPassword: "",
      confirmPasswordError: false,
      confirmPasswordErrorMsg: "",
      serverErrorMsg: "",
    };
  },
  watch: {
    oldPassword() {
      if (this.oldPassword) {
        this.oldPasswordError = false;
        this.oldPasswordErrorMsg = "";
      }
    },
    newPassword() {
      if (this.newPassword) {
        this.newPasswordError = false;
        this.newPasswordErrorMsg = "";
      }
    },
    confirmPassword() {
      if (this.confirmPassword) {
        this.confirmPasswordError = false;
        this.confirmPasswordErrorMsg = "";
      }
    },
  },
  methods: {
    openUserEditModal() {
      $("#userEditModal").modal({ backdrop: "static", keyboard: false });
    },
    closeUserEditModal() {
      let self = this;
      self.resetForm();
      $("#resetPasswordModal").modal("hide");
    },
    checkInput() {
      let self = this;
      let validity = true;

      //空值檢查
      if (!self.oldPassword) {
        self.oldPasswordError = true;
        self.oldPasswordErrorMsg = "舊密碼未填";
        validity = false;
      }
      if (!self.newPassword) {
        self.newPasswordError = true;
        self.newPasswordErrorMsg = "新密碼未填";
        validity = false;
      }
      if (!self.confirmPassword) {
        self.confirmPasswordError = true;
        self.confirmPasswordErrorMsg = "確認密碼未填";
        validity = false;
      }

      //規則檢查
      if (validity) {
        if (self.newPassword.length < 8 || self.newPassword.length > 30) {
          self.newPasswordError = true;
          self.newPasswordErrorMsg = "密碼長度必須為8-30碼";
          validity = false;
        }
      }
      if (validity) {
        let passwordExp = new RegExp(
          /^(?=[0-9a-zA-Z]*\d)(?=[0-9a-zA-Z]*[a-zA-Z])[0-9a-zA-Z]{8,30}$/g
        );
        if (!self.newPassword.match(passwordExp)) {
          self.newPasswordError = true;
          self.newPasswordErrorMsg = "密碼必須包含英數字";
          validity = false;
        }
      }
      if (self.newPassword != self.confirmPassword) {
        self.confirmPasswordError = true;
        self.confirmPasswordErrorMsg = "確認密碼與舊密碼不相同";
        validity = false;
      }
      
      return validity;
    },
    resetForm() {
      let self = this;
      self.oldPassword = "";
      self.oldPasswordError = false;
      self.oldPasswordErrorMsg = "";
      self.newPassword = "";
      self.newPasswordError = false;
      self.newPasswordErrorMsg = "";
      self.confirmPassword = "";
      self.confirmPasswordError = false;
      self.confirmPasswordErrorMsg = "";
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
.reminder-msg {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
}
</style>
