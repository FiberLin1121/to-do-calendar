<template>
  <section class="container">
    <div class="row">
      <section class="col-12 col-lg-4">
        <div
          class="row flex-column justify-content-center align-items-center"
          style="height: calc(100vh)"
        >
          <div class="title-have-a-nice-day">\ Have a nice day ! /</div>
          <div class="title-hello text-first mt-2"><strong>Hello</strong></div>
          <div class="title-todo-Calendar mb-5">To-do Calendar</div>
          <!-- <div v-if="false">{{ isLoginModalStatus }}</div> -->
          <!-- Button trigger modal -->
          <button
            type="button"
            data-toggle="modal"
            @click="openLoginModal"
            class="
              btn btn-first
              d-flex
              flex-column
              justify-content-center
              align-items-center
              start-buttom
              rounded-circle
            "
          >
            <span class="h3 text-white">Get Started</span>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right-to-bracket"
              size="2x"
              class="text-white"
            />
            <i class="fa-solid fa-calendar-check"></i>
          </button>
          <!-- /Button trigger modal -->
        </div>
      </section>
      <section class="col-lg-8">
        <div class="row">
          <div class="col-md-6 d-none d-md-block">
            <div
              class="row flex-column justify-content-center"
              style="height: calc(100vh)"
            >
              <div
                class="
                  square-calendar
                  bg-first
                  rounded
                  align-self-center
                  text-center text-white
                  m-4
                "
              >
                <div class="display-4">{{ thisYear }}</div>
                <div class="mb-1" style="font-size: 1.3rem">Calendar</div>
                <div class="d-flex justify-content-between">
                  <span></span>
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                  <span></span>
                </div>
                <div class="d-flex justify-content-between">
                  <span></span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span></span>
                </div>
                <div class="d-flex justify-content-between">
                  <span></span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span></span>
                </div>
                <div class="d-flex justify-content-between">
                  <span></span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span></span>
                </div>
              </div>
              <div class="row justify-content-center">
                <div
                  class="
                    d-flex
                    flex-column
                    justify-content-end
                    square-month
                    bg-second
                    text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">05</div>
                  <div class="mb-2">May</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-third
                    text-white text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">06</div>
                  <div class="mb-2">June</div>
                </div>
                <div class="w-100"></div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-fourth
                    text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">09</div>
                  <div class="mb-2">September</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-first
                    text-white text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">10</div>
                  <div class="mb-2">October</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <div
              class="row flex-column justify-content-center"
              style="height: calc(100vh)"
            >
              <div class="row">
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-third
                    text-white text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">01</div>
                  <div class="mb-2">January</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-second
                    text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">02</div>
                  <div class="mb-2">February</div>
                </div>
                <div class="w-100"></div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-fourth
                    text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">03</div>
                  <div class="mb-2">March</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-first
                    text-white text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">04</div>
                  <div class="mb-2">April</div>
                </div>
              </div>
              <div class="row">
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-first
                    text-white text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">07</div>
                  <div class="mb-2">July</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-third
                    text-white text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">08</div>
                  <div class="mb-2">August</div>
                </div>
                <div class="w-100"></div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-second
                    text-center
                    rounded
                    m-4
                    mr-5
                  "
                >
                  <div style="font-size: 2.6em">11</div>
                  <div class="mb-2">November</div>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    square-month
                    bg-fourth
                    text-center
                    rounded
                    m-4
                  "
                >
                  <div style="font-size: 2.6em">12</div>
                  <div class="mb-2">December</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <login-modal></login-modal>
    <!-- login modal -->
    <!-- <div
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
    </div> -->
    <!-- /login modal -->

  <register-modal></register-modal>
    <!-- register modal -->
    <!-- <div
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
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="inputEmail1">用戶名</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': nameError }"
                  placeholder="請輸入用戶名"
                  v-model="name"
                />
                <div class="error-msg">{{ nameErrorMsg }}</div>
              </div>
              <div class="form-group">
                <label for="inputAccount">帳號</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': accountError }"
                  placeholder="請輸入帳號"
                  v-model="account"
                />
                <div class="error-msg">{{ accountErrorMsg }}</div>
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
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn btn-info text-white"
              @click="sendUserRegister"
            >
              註冊
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- /register modal -->
  </section>
</template>

<script>
import { mapState } from "vuex";
import loginModal from "../modal/loginModal.vue";
import registerModal from "../modal/registerModal.vue";
export default {
  name: "index",
  components: {
    "login-modal": loginModal,
    "register-modal": registerModal,
  },
  data() {
    return {
      // name: "",
      // nameError: false,
      // nameErrorMsg: "",
      // account: "",
      // accountError: false,
      // accountErrorMsg: "",
      // password: "",
      // passwordError: false,
      // passwordErrorMsg: "",
      // serverErrorMsg: "",
      thisYear: new Date().getFullYear(),
    };
  },
  created() {
    console.log("created()");
  },
  mounted() {
    console.log("mounted()");
    if (this.$store.state.isLoginModalOpen) {
      $("#loginModal").modal({ backdrop: "static", keyboard: false });
      console.log("是mounted開的");
    }
    // console.log("userId:"+this.$store.state.userId);
    // console.log("userName:"+this.$store.state.userName);
    // console.log("token:"+this.$store.state.token);
  },
  computed: {
    ...mapState(["isLoginModalOpen"]),
  },
  watch: {
    isLoginModalOpen() {
      if (this.$store.state.isLoginModalOpen) {
        $("#loginModal").modal({ backdrop: "static", keyboard: false });
        console.log("是watch開的");
      } else {
        $("#loginModal").modal("hide");
        console.log("是watch關的");
      }
    },
    // name() {
    //   if (this.name) {
    //     this.nameError = false;
    //     this.nameErrorMsg = "";
    //   }
    // },
    // account() {
    //   if (this.account) {
    //     this.accountError = false;
    //     this.accountErrorMsg = "";
    //   }
    // },
    // password() {
    //   if (this.password) {
    //     this.passwordError = false;
    //     this.passwordErrorMsg = "";
    //   }
    // },
  },
  methods: {
    openLoginModal() {
      let self = this;
      self.$router.push("innerPage/todoLists");
      console.log("git test");
    },
    // closeLoginModal() {
    //   let self = this;
    //   self.resetForm();
    //   self.$store.commit("isLoginModalOpen", false);
    // },
    // openRegisterModal() {
    //   let self = this;
    //   self.resetForm();
    //   self.$store.commit("isLoginModalOpen", false);
    //   $("#registerModal").modal({ backdrop: "static", keyboard: false });
    // },
    // checkLoginInput() {
    //   let self = this;
    //   let validity = true;
    //   if (!self.account) {
    //     self.accountError = true;
    //     self.accountErrorMsg = "帳號未填";
    //     validity = false;
    //   }
    //   if (!self.password) {
    //     self.passwordError = true;
    //     self.passwordErrorMsg = "密碼未填";
    //     validity = false;
    //   }
    //   return validity;
    // },
    // checkRegisterInput() {
    //   let self = this;
    //   let validity = true;
    //   if (!self.name) {
    //     self.nameError = true;
    //     self.nameErrorMsg = "用戶名未填";
    //     validity = false;
    //   }
    //   if (!self.account) {
    //     self.accountError = true;
    //     self.accountErrorMsg = "帳號未填";
    //     validity = false;
    //   }
    //   if (!self.password) {
    //     self.passwordError = true;
    //     self.passwordErrorMsg = "密碼未填";
    //     validity = false;
    //   }
    //   return validity;
    // },
    // resetForm() {
    //   let self = this;
    //   self.name = "";
    //   self.nameError = false;
    //   self.nameErrorMsg = "";
    //   self.account = "";
    //   self.accountError = false;
    //   self.accountErrorMsg = "";
    //   self.password = "";
    //   self.passwordError = false;
    //   self.passwordErrorMsg = "";
    //   self.serverErrorMsg = "";
    // },
    // sendUserLogin() {
    //   let self = this;
    //   let result = true;
    //   if (self.checkLoginInput()) {
    //     //send login API to server
    //     if (result) {
    //       self.$store.commit("isLoginModalOpen", false);
    //       self.$store.commit("setUserId", "user01");
    //       self.$store.commit("setUserName", "test");
    //       self.$store.commit("setToken", "123");
    //       self.$store.commit("setStoreToSession");
    //       setTimeout(() => {
    //         self.$router.push("innerPage/todoLists");
    //       }, 2000);
    //     } else {
    //       self.serverErrorMsg = "帳號或密碼錯誤";
    //     }
    //   }
    // },
    // sendUserRegister() {
    //   let self = this;
    //   if (self.checkRegisterInput()) {
    //     //send register API to server
    //     self.$router.push("innerPage/todoLists");
    //   }
    // },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html * {
  font-family: "Kanit";
}

.title-have-a-nice-day {
  font-size: 1rem;
  line-height: 1;
}

.title-hello {
  font-size: 7rem;
  line-height: 1;
}

.title-todo-Calendar {
  font-size: 2.3rem;
  line-height: 1;
}

.start-buttom {
  width: 200px;
  height: 200px;
}

.square-calendar {
  width: 250px;
  height: 229px;
}

.square-month {
  width: 90px;
  height: 90px;
}
</style>
