<template>
  <div
    class="modal fade"
    id="noteCreateModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="noteCreateModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-first text-white">
          <h5 class="modal-title">新增便條貼</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeNoteCreateModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="text-left">
            <div class="form-group">
              <label for="noteTitle">標題</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': nameError }"
                placeholder="請輸入便條貼名稱"
                v-model="name"
                required
              />
              <div class="error-msg">{{ nameErrorMsg }}</div>
            </div>
            <div class="form-group">
              <label for="noteCreateFormTextarea">內容</label>
              <textarea
                class="form-control"
                id="noteCreateFormTextarea"
                placeholder="請輸入便條貼內容"
                rows="4"
                v-model="content"
              ></textarea>
            </div>

            <div class="mb-3">
              <div for="maskingTapeRadio" class="mb-2">紙膠帶樣式</div>
              <div class="container">
                <div class="row d-flex">
                  <div
                    v-for="item in maskingTapeList"
                    :key="item.id"
                    class="col-2 d-flex custom-control custom-radio mt-2"
                  >
                    <input
                      type="radio"
                      class="custom-control-input"
                      :class="{ 'is-invalid': maskingTapeError }"
                      :id="item.id"
                      name="radio-masking-tape"
                      :value="item.name"
                      v-model="maskingTape"
                      required
                    />
                    <label
                      :for="item.id"
                      class="custom-control-label px-3 mr-3 rounded border"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('../../assets/images/' + item.value) +
                          ')',
                      }"
                    ></label>
                  </div>
                </div>
              </div>
              <div class="error-msg">{{ maskingTapeErrorMsg }}</div>
            </div>

            <div class="mb-3">
              <div for="noteColorRadio" class="mb-2">便條貼顏色</div>
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
                      :class="{ 'is-invalid': bgColorError }"
                      :id="item.id"
                      name="radio-note-color"
                      :value="item.value"
                      v-model="bgColor"
                      required
                    />
                    <label
                      :for="item.id"
                      class="custom-control-label px-3 mr-3 rounded"
                      :style="{ backgroundColor: item.value }"
                    ></label>
                  </div>
                </div>
              </div>
              <div class="error-msg">{{ bgColorErrorMsg }}</div>
            </div>

            <div class="error-msg">{{ serverErrorMsg }}</div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeNoteCreateModal"
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
  name: "noteCreateModal",
  data() {
    return {
      name: "",
      nameError: false,
      nameErrorMsg: "",
      content: "",
      bgColor: "",
      bgColorError: false,
      bgColorErrorMsg: "",
      serverErrorMsg: "",
      maskingTape: "",
      maskingTapeError: false,
      maskingTapeErrorMsg: "",
      colorList: [
        { id: "NCC1", name: "pink", value: "#f6d8e4" },
        { id: "NCC2", name: "orange", value: "#f7e3cb" },
        { id: "NCC3", name: "yellow", value: "#fff8b7" },
        { id: "NCC4", name: "green", value: "#ddeee8" },
        { id: "NCC5", name: "blue", value: "#d7ebf4" },
        { id: "NCC6", name: "purple", value: "#e7d4e8" },
      ],
      maskingTapeList: [
        { id: "NMC1", name: "01", value: "masking-tape-01.jpg" },
        { id: "NMC2", name: "02", value: "masking-tape-02.jpg" },
        { id: "NMC3", name: "03", value: "masking-tape-03.jpg" },
        { id: "NMC4", name: "04", value: "masking-tape-04.jpg" },
        { id: "NMC5", name: "05", value: "masking-tape-05.jpg" },
        { id: "NMC6", name: "06", value: "masking-tape-06.jpg" },
      ],
    };
  },
  mounted() {},
  watch: {
    name() {
      if (this.name) {
        this.nameError = false;
        this.nameErrorMsg = "";
      }
    },
    bgColor() {
      if (this.bgColor) {
        this.bgColorrError = false;
        this.bgColorErrorMsg = "";
      }
    },
    maskingTape() {
      if (this.maskingTape) {
        this.maskingTapeError = false;
        this.maskingTapeErrorMsg = "";
      }
    },
  },
  methods: {
    closeNoteCreateModal() {
      let self = this;
      self.resetForm();
      $("#noteCreateModal").modal("hide");
    },
    resetForm() {
      let self = this;
      self.name = "";
      self.nameError = false;
      self.nameErrorMsg = "";
      self.content = "";
      self.maskingTape = "";
      self.maskingTapeError = false;
      self.maskingTapeErrorMsg = "";
      self.bgColor = "";
      self.bgColorError = false;
      self.bgColorErrorMsg = "";
      self.serverErrorMsg = "";
    },
    checkNoteInput() {
      let self = this;
      let validity = true;
      if (!self.name) {
        self.nameError = true;
        self.nameErrorMsg = "便條貼標題未填";
        validity = false;
      }
      if (!self.maskingTape) {
        self.maskingTapeError = true;
        self.maskingTapeErrorMsg = "紙膠帶樣式未選";
        validity = false;
      }
      if (!self.bgColor) {
        self.bgColorError = true;
        self.bgColorErrorMsg = "便條貼顏色未選";
        validity = false;
      }
      return validity;
    },
    submitEvent() {
      let self = this;
      if (self.checkNoteInput()) {
        self.$emit("submitEvent");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
