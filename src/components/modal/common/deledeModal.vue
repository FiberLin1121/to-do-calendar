<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="hdeleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-secondary text-white">
          <h5 class="modal-title">刪除{{modalTitle}}</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            data-dismiss="modal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{modalTitle}}「{{pickedItem.name}}」將被刪除，確定要刪除「{{pickedItem.name}}」嗎？
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            取消
          </button>
          <button
            type="submit"
            class="btn btn-fourth text-white"
            @click="submitEvent"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deleteModal",
  props: ["pickedItem","modalTitle"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submitEvent() {
      this.$emit("submitEvent");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
