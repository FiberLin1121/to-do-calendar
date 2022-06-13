<template>
  <div
    class="modal fade"
    id="taskCreateModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="taskCreateModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-first text-white">
          <h5 class="modal-title">新增代辦事項</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeTaskCreateModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="text-left">
            <div class="form-group">
              <label for="taskName">待辦事項</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': taskError }"
                placeholder="請輸入待辦事項"
                v-model="task"
                required
              />
              <div class="error-msg">{{ taskErrorMsg }}</div>
            </div>

            <div for="checkColorRadio" class="mb-2">標籤顏色</div>
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
                    :class="{ 'is-invalid': labelTypeError }"
                    :id="item.id"
                    name="radio-stacked"
                    :value="item.name"
                    v-model="labelType"
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

            <div class="error-msg">{{ labelTypeErrorMsg }}</div>
            <div class="error-msg">{{ serverErrorMsg }}</div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeTaskCreateModal"
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
  name: "taskCreateModal",
  data() {
    return {
      task: "",
      taskError: false,
      taskErrorMsg: "",
      labelType: "",
      labelTypeError: false,
      labelTypeErrorMsg: "",
      serverErrorMsg: "",
      colorList: [
        { id: "TC1", name: "firstColor", value: "#e53e3e" },
        { id: "TC2", name: "secondColor", value: "#dd6b20" },
        { id: "TC3", name: "thirdColor", value: "#d69e2e" },
        { id: "TC4", name: "fourthColor", value: "#38a169" },
      ],
    };
  },
  mounted() {},
  watch: {
    task() {
      if (this.task) {
        this.taskError = false;
        this.taskErrorMsg = "";
      }
    },
    labelType() {
      if (this.labelType) {
        this.labelTypeError = false;
        this.labelTypeErrorMsg = "";
      }
    },
  },
  methods: {
    closeTaskCreateModal() {
      let self = this;
      self.resetForm();
      $("#taskCreateModal").modal("hide");
    },
    resetForm() {
      let self = this;
      self.task = "";
      self.taskError = false;
      self.taskErrorMsg = "";
      self.labelType = "";
      self.labelTypeError = false;
      self.labelTypeErrorMsg = "";
      self.serverErrorMsg = "";
    },
    checkTaskInput() {
      let self = this;
      let validity = true;
      if (!self.task) {
        self.taskError = true;
        self.taskErrorMsg = "代辦事項未填";
        validity = false;
      }
      if (!self.labelType) {
        self.labelTypeError = true;
        self.labelTypeErrorMsg = "標籤顏色未選";
        validity = false;
      }
      return validity;
    },
    submitEvent() {
      let self = this;
      let createItem = {
        name : self.task,
        labelType : self.labelType
      }
      if (self.checkTaskInput()) {
        self.$emit("submitEvent", createItem);
        self.resetForm();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
