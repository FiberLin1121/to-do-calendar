<template>
  <div
    class="modal fade"
    id="habitCreateModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="habitCreateModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-first text-white">
          <h5 class="modal-title">新增原子習慣</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeHabitCreateModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="text-left">
            <div class="form-group">
              <label for="habitName">原子習慣</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': habitError }"
                placeholder="請輸入原子習慣"
                v-model="habit"
                required
              />
              <div class="error-msg">{{ habitErrorMsg }}</div>
            </div>

            <div for="checkColorRadio" class="mb-2">圈選日期顏色</div>
            <div class="container">
              <div class="row d-flex">
                <div
                  v-for="item in colorList"
                  :key="item.id"
                  class="col-2 d-flex custom-control custom-radio mt-2"
                >
                  <input
                    type="radio"
                    class="custom-control-input"
                    :class="{ 'is-invalid': checkColorError }"
                    :id="item.id"
                    name="radio-stacked"
                    :value="item.name"
                    v-model="checkColor"
                    required
                  />
                  <label
                    class="custom-control-label px-3 mr-3 rounded"
                    :style="{ backgroundColor: item.value }"
                    :for="item.id"
                  ></label>
                </div>
              </div>
            </div>

            <div class="error-msg">{{ checkColorErrorMsg }}</div>
            <div class="error-msg">{{ serverErrorMsg }}</div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeHabitCreateModal"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-first text-white"
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
  name: "habitCreateModal",
  data() {
    return {
      habit: "",
      habitError: false,
      habitErrorMsg: "",
      checkColor: "",
      checkColorError: false,
      checkColorErrorMsg: "",
      serverErrorMsg: "",
      colorList: [
        { id: "CC1", name: "pink", value: "#d53f8c" },
        { id: "CC2", name: "red", value: "#e53e3e" },
        { id: "CC3", name: "orange", value: "#dd6b20" },
        { id: "CC4", name: "yellow", value: "#d69e2e" },
        { id: "CC5", name: "green", value: "#38a169" },
        { id: "CC6", name: "teal", value: "#319795" },
        { id: "CC7", name: "blue", value: "#3182ce" },
        { id: "CC8", name: "indigo", value: "#5a67d8" },
        { id: "CC9", name: "purple", value: "#805ad5" },
        { id: "CC10", name: "gray", value: "#718096" },
      ],
    };
  },
  mounted() {},
  watch: {
    habit() {
      if (this.habit) {
        this.habitError = false;
        this.habitErrorMsg = "";
      } else {
        this.habitError = true;
        this.habitErrorMsg = "原子習慣未填";
      }
    },
    checkColor() {
      if (this.checkColor) {
        this.checkColorError = false;
        this.checkColorErrorMsg = "";
      }
    },
  },
  methods: {
    closeHabitCreateModal() {
      let self = this;
      self.resetForm();
      $("#habitCreateModal").modal("hide");
    },
    resetForm() {
      let self = this;
      self.habit = "";
      self.habitError = false;
      self.habitErrorMsg = "";
      self.checkColor = "";
      self.checkColorError = false;
      self.checkColorErrorMsg = "";
      self.serverErrorMsg = "";
    },
    checkHabitInput() {
      let self = this;
      let validity = true;
      if (!self.habit) {
        self.habitError = true;
        self.habitErrorMsg = "原子習慣未填";
        validity = false;
      }
      if (!self.checkColor) {
        self.checkColorError = true;
        self.checkColorErrorMsg = "日期顏色未選";
        validity = false;
      }
      return validity;
    },
    submitEvent() {
      let self = this;
      if (self.checkHabitInput()) {
        self.$emit("submitEvent");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
