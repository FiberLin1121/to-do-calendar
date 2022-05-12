<template>
  <div
    class="modal fade"
    id="labelSettingModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="labelSettingModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-fourth text-white">
          <h5 class="modal-title">標籤顏色設定</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeLabelSettingModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="text-left">
              <h4>時間管理的四象限</h4>
              <div>請選擇標籤顏色 </div>
              <button
                type="button"
                class="btn btn-sm btn-light border mt-2"
                @click="resetColorsToDefault"
              >
                恢復為預設
              </button>
            </div>
            <div class="row justify-content-center text-white mt-3">
              <div
                class="col-5 py-4 m-2 rounded-lg"
                :style="{ backgroundColor: secondColor }"
              >
                <h4>第二象限</h4>
                <div>重要不緊急</div>
                <div class="reminder-msg">拆成小任務並制定計畫</div>
                <input
                  type="color"
                  class="mt-2"
                  :default-value="secondColor"
                  v-model="secondColor"
                />
              </div>
              <div
                class="col-5 py-4 m-2 rounded-lg"
                :style="{ backgroundColor: firstColor }"
              >
                <h4>第一象限</h4>
                <div>重要緊急</div>
                <div class="reminder-msg">第一優先處理</div>
                <input
                  type="color"
                  class="mt-2"
                  :default-value="firstColor"
                  v-model="firstColor"
                />
              </div>
              <div
                class="col-5 py-4 m-2 rounded-lg"
                :style="{ backgroundColor: fourthColor }"
              >
                <h4>第四象限</h4>
                <div>不緊急不重要</div>
                <div class="reminder-msg">不必要的事項</div>
                <input
                  type="color"
                  class="mt-2"
                  :default-value="fourthColor"
                  v-model="fourthColor"
                />
              </div>
              <div
                class="col-5 py-4 m-2 rounded-lg"
                :style="{ backgroundColor: thirdColor }"
              >
                <h4>第三象限</h4>
                <div>緊急不重要</div>
                 <div class="reminder-msg">有效率集中處理</div>
                <input
                  type="color"
                  class="mt-2"
                  :default-value="thirdColor"
                  v-model="thirdColor"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeLabelSettingModal"
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
  name: "labelSettingModal",
  data() {
    return {
      firstColor: "#e53e3e",
      secondColor: "#dd6b20",
      thirdColor: "#d69e2e",
      fourthColor: "#38a169",
    };
  },
  methods: {
    closeLabelSettingModal() {
      $("#labelSettingModal").modal("hide");
    },
    resetColorsToDefault() {
      let self = this;
      self.firstColor = "#e53e3e";
      self.secondColor = "#dd6b20";
      self.thirdColor = "#d69e2e";
      self.fourthColor = "#38a169";
    },
    submitEvent() {
      let self = this;
      self.$emit("submitEvent");
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
