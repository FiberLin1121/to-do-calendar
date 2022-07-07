<template>
  <section class="container bg-color">
    <section class="row">
      <!-- title & entry button section -->
      <section class="col-12 col-lg-4">
        <div
          class="row flex-column justify-content-center align-items-center"
          style="height: calc(100vh)"
        >
          <div class="title-have-a-nice-day">\ Have a nice day ! /</div>
          <div class="title-hello text-first mt-2 tracking-in-expand">
            <strong>Hello</strong>
          </div>
          <div class="title-todo-Calendar mb-5">To-do Calendar</div>

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
              bounce-in-top
            "
          >
            <span class="h3 text-white">Get Started</span>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right-to-bracket"
              size="2x"
              class="text-white"
            />
          </button>
          <!-- /Button trigger modal -->
        </div>
      </section>
      <!-- /title & entry button section -->

      <!-- calendar square section -->
      <section class="col-lg-8 tracking-in-expand">
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
                  flip-horizontal-top
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
      <!-- /calendar square section -->
    </section>

    <!-- material animation section -->
    <div class="material-1 rounded-circle"></div>
    <div class="material-2 rounded-circle"></div>
    <div class="material-3 rounded-circle"></div>
    <div class="material-4 rounded-circle"></div>
    <div class="material-5 rounded-circle"></div>
    <div class="material-6 rounded-circle"></div>
    <div class="material-7 rounded-circle"></div>
    <!-- /material animation section -->

    <!-- modal section -->
    <login-modal
      :loginErrorMsg="loginErrorMsg"
      @submitEvent="sendUserLogin"
    ></login-modal>
    <register-modal
      :registerErrorMsg="registerErrorMsg"
      @submitEvent="sendUserRegister"
    ></register-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import { mapState } from "vuex";
import loginModal from "../modal/loginModal.vue";
import registerModal from "../modal/registerModal.vue";
import { apiUserRegister, apiUserLogin } from "../../api/index.js";

export default {
  name: "index",
  components: {
    "login-modal": loginModal,
    "register-modal": registerModal,
  },
  data() {
    return {
      thisYear: new Date().getFullYear(),
      loginErrorMsg: "",
      registerErrorMsg: "",
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
  },
  methods: {
    openLoginModal() {
      let self = this;
      self.$router.push("innerPage/todoLists");
    },
    sendUserLogin(queryitem) {
      let self = this;
      self.loginErrorMsg = "";
      apiUserLogin(queryitem.account, queryitem.password)
        .then((res) => {
          self.$store.commit("isLoginModalOpen", false);
          self.$store.commit("setUserId", res.data.id);
          self.$store.commit("setAccount", res.data.email);
          self.$store.commit("setUserName", res.data.name);
          self.$store.commit("setToken", res.data.token);
          self.$store.commit("setFirstColor", res.data.labelSetting.firstColor);
          self.$store.commit(
            "setSecondColor",
            res.data.labelSetting.secondColor
          );
          self.$store.commit("setThirdColor", res.data.labelSetting.thirdColor);
          self.$store.commit(
            "setFourthColor",
            res.data.labelSetting.fourthColor
          );
          self.$store.commit("setStoreToSession");
          self.$store.commit("isLoading", true);
          self.$router.push("innerPage/todoLists");
        })
        .catch((err) => {
          // self.loginErrorMsg = err.response.data;
          self.loginErrorMsg = "帳號或密碼錯誤";
        });
    },
    sendUserRegister(createItem) {
      let self = this;
      apiUserRegister(createItem.account, createItem.name, createItem.password)
        .then((res) => {
          self.sendUserLogin(createItem);
          $("#registerModal").modal("hide");
        })
        .catch((err) => {
          self.registerErrorMsg = err.response.data;
        });
    },
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

.material-1 {
  position: absolute;
  top: 43%;
  left: 73%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 100px;
  height: 100px;
  background: url("~@/assets/images/22573317-04.png") repeat center center;
}

.material-2 {
  position: absolute;
  top: 10%;
  left: 13%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 150px;
  height: 150px;
  background: url("~@/assets/images/22573317-01.png") repeat center center;
  animation-delay: 0.5s;
}

.material-3 {
  position: absolute;
  top: 83%;
  left: 38%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 100px;
  height: 100px;
  background: url("~@/assets/images/22573317-01.png") repeat center center;
  animation-delay: 1.5s;
}

.material-4 {
  position: absolute;
  top: 0%;
  left: 60%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 100px;
  height: 100px;
  background: url("~@/assets/images/22573317-01.png") repeat center center;
  animation-delay: 0.2s;
}

.material-5 {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 200px;
  height: 200px;
  background: url("~@/assets/images/22573317-04.png") repeat center center;
  animation-delay: 1.1s;
}

.material-6 {
  position: absolute;
  top: 10%;
  left: 85%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 200px;
  height: 200px;
  background: url("~@/assets/images/22573317-03.png") repeat center center;
  animation-delay: 0.8s;
}

.material-7 {
  position: absolute;
  top: 70%;
  left: 90%;
  transform: translateX(-50%);
  animation: material 2s ease-in infinite;
  width: 100px;
  height: 100px;
  background: url("~@/assets/images/22573317-01.png") repeat center center;
  animation-delay: 1.8s;
}

@keyframes material {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
