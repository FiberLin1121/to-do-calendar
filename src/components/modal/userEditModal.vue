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
          <h5 class="modal-title">修改個人資料</h5>
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
              <label for="inputName">暱稱</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': nameError }"
                placeholder="請輸入暱稱"
                v-model="userName"
              />
              <div class="error-msg">{{ nameErrorMsg }}</div>
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
            @click="openResetPasswordModal"
            >重設密碼</a
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
import { mapState } from "vuex";
export default {
  name: "userEditModal",
  data() {
    return {
      nameError: false,
      nameErrorMsg: "",
      serverErrorMsg: "",
    };
  },
  computed: {
    ...mapState(["userId", "userName"]),
  },
  watch: {
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
    openResetPasswordModal() {
      $("#resetPasswordModal").modal({ backdrop: "static", keyboard: false });
    },
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
        self.nameErrorMsg = "暱稱未填";
        validity = false;
      }
      return validity;
    },
    resetForm() {
      let self = this;
      self.nameError = false;
      self.nameErrorMsg = "";
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
