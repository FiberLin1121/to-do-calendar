<template>
  <div
    class="modal fade"
    id="noteEditModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="noteEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-second text-white">
          <h5 class="modal-title">編輯便條貼</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeNoteEditModal"
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
                placeholder="請輸入便條貼標題"
                v-model="pickedNote.name"
                required
              />
              <div class="error-msg">{{ nameErrorMsg }}</div>
            </div>
            <div class="form-group">
              <label for="noteEditFormTextarea">內容</label>
              <textarea
                class="form-control"
                id="noteEditFormTextarea"
                rows="4"
                v-model="pickedNote.content"
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
                      v-model="pickedNote.tapeStyle"
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
                      v-model="pickedNote.bgColor"
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
            @click="closeNoteEditModal"
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
  name: "noteEditModal",
  props: ["pickedNote"],
  data() {
    return {
      nameError: false,
      nameErrorMsg: "",
      bgColorError: false,
      bgColorErrorMsg: "",
      maskingTapeError: false,
      maskingTapeErrorMsg: "",
      serverErrorMsg: "",
      colorList: [
        { id: "NCE1", name: "pink", value: "#f6d8e4" },
        { id: "NCE2", name: "orange", value: "#f7e3cb" },
        { id: "NCE3", name: "yellow", value: "#fff8b7" },
        { id: "NCE4", name: "green", value: "#ddeee8" },
        { id: "NCE5", name: "blue", value: "#d7ebf4" },
        { id: "NCE6", name: "purple", value: "#e7d4e8" },
      ],
      maskingTapeList: [
        { id: "NME1", name: "01", value: "masking-tape-01.jpg" },
        { id: "NME2", name: "02", value: "masking-tape-02.jpg" },
        { id: "NME3", name: "03", value: "masking-tape-03.jpg" },
        { id: "NME4", name: "04", value: "masking-tape-04.jpg" },
        { id: "NME5", name: "05", value: "masking-tape-05.jpg" },
        { id: "NME6", name: "06", value: "masking-tape-06.jpg" },
      ],
    };
  },
  mounted() {},
  watch: {
    "pickedNote.name"() {
      if (this.pickedNote.name) {
        this.nameError = false;
        this.nameErrorMsg = "";
      }
    },
    "pickedNote.bgColor"() {
      if (this.pickedNote.bgColor) {
        this.bgColorError = false;
        this.bgColorErrorMsg = "";
      }
    },
    "pickedNote.maskingTape"() {
      if (this.pickedNote.maskingTape) {
        this.maskingTapeError = false;
        this.maskingTapeErrorMsg = "";
      }
    },
  },
  methods: {
    closeNoteEditModal() {
      let self = this;
      self.resetForm();
      $("#noteEditModal").modal("hide");
    },
    resetForm() {
      let self = this;
      self.nameError = false;
      self.nameErrorMsg = "";
      self.bgColorError = false;
      self.bgColorErrorMsg = "";
      self.serverErrorMsg = "";
    },
    checkNoteInput() {
      let self = this;
      let validity = true;
      if (!self.pickedNote.name) {
        self.nameError = true;
        self.nameErrorMsg = "便條貼標題未填";
        validity = false;
      }
      if (!self.pickedNote.tapeStyle) {
        self.maskingTapeError = true;
        self.maskingTapeErrorMsg = "紙膠帶樣式未選";
        validity = false;
      }
      if (!self.pickedNote.bgColor) {
        self.bgColorError = true;
        self.bgColorErrorMsg = "便條貼顏色未選";
        validity = false;
      }
      return validity;
    },
    submitEvent() {
      let self = this;
      console.log("content="+self.pickedNote.content);
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
