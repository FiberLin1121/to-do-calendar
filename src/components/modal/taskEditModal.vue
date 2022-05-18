<template>
  <div
    class="modal fade"
    id="taskEditModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="taskEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-second text-white">
          <h5 class="modal-title">編輯代辦事項</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeTaskEditModal"
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
                v-model="pickedTask.name"
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
                    :class="{ 'is-invalid': checkColorError }"
                    :id="item.id"
                    name="radio-stacked"
                    :value="item.name"
                    v-model="pickedTask.labelType"
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
            @click="closeTaskEditModal"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-second text-white"
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
  props:["pickedTask"],
  data() {
    return {
      taskError: false,
      taskErrorMsg: "",
      checkColorError: false,
      checkColorErrorMsg: "",
      serverErrorMsg: "",
      colorList: [
        { id: "TE1", name: "firstColor", value: "#e53e3e" },
        { id: "TE2", name: "secondColor", value: "#dd6b20" },
        { id: "TE3", name: "thirdColor", value: "#d69e2e" },
        { id: "TE4", name: "fourthColor", value: "#38a169" },
      ],
    };
  },
  mounted() {},
  watch: {
    "pickedTask.name"() {
      if (this.pickedTask.name) {
        this.taskError = false;
        this.taskErrorMsg = "";
      }
    },
    "pickedTask.labelType"(){
      if (this.pickedTask.labelType) {
        this.checkColorError = false;
        this.checkColorErrorMsg = "";
      }
    },
  },
  methods: {
    closeTaskEditModal() {
      let self = this;
      self.resetForm();
      $("#taskEditModal").modal("hide");
    },
    resetForm() {
      let self = this;
      self.taskError = false;
      self.taskErrorMsg = "";
      self.checkColorError = false;
      self.checkColorErrorMsg = "";
      self.serverErrorMsg = "";
    },
    checkTaskInput() {
      let self = this;
      let validity = true;
      if (!self.pickedTask.name) {
        self.taskError = true;
        self.taskErrorMsg = "代辦事項未填";
        validity = false;
      }
      if (!self.pickedTask.labelType) {
        self.checkColorError = true;
        self.checkColorErrorMsg = "標籤顏色未選";
        validity = false;
      }
      return validity;
    },
    submitEvent() {
      let self = this;
      if (self.checkTaskInput()) {
        self.$emit("submitEvent");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
