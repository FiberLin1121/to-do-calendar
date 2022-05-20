<template>
  <section class="container-fuild innerpage-min-width tracking-in-expand">
    <section class="row">
      <!-- monthly calender section -->
      <section class="col-3 innerpage-height">
        <div class="btn-group btn-group-sm my-4" role="group">
          <button type="button" class="btn btn-outline-secondary">
            全部
            <span class="badge badge-light">{{
              todoList.length + doneList.length
            }}</span>
          </button>
          <button type="button" class="btn btn-outline-secondary">
            未完成 <span class="badge badge-light">{{ todoList.length }}</span>
          </button>
          <button type="button" class="btn btn-outline-secondary">
            已完成 <span class="badge badge-first">{{ doneList.length }} </span>
          </button>
        </div>
        <v-date-picker
          :rows="2"
          mode="date"
          color="primary"
          v-model="pickedDate"
          :model-config="modelConfig"
        />
      </section>
      <!-- /monthly calender section -->

      <!-- todo lists section -->
      <section class="col-9 innerpage-height">
        <div class="dot-decoration-header p-5"></div>
        <div class="container">
          <div class="row">
            <!-- to do section -->
            <div class="col-6">
              <div class="d-flex text-left mx-4">
                <!-- plus button -->
                <div>
                  <button
                    type="button"
                    class="btn btn-first text-white"
                    @click="openTaskCreateModal"
                  >
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                </div>
                <!-- /plus button -->
                <h2 class="h2 text-black-50 mb-4 mx-4">To Do</h2>
              </div>

              <!-- to do list -->
              <draggable
                v-model="todoList"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                :move="getdata"
                @update="datadragEnd"
                class="list-group"
              >
                <transition-group
                  type="transition"
                  name="!drag ? 'flip-list' : null"
                >
                  <div
                    class="task-label mb-3 mx-4 d-flex"
                    :style="{
                      borderLeftColor: renderLabelColorValue(item.labelType),
                    }"
                    v-for="item in todoList"
                    :key="item.id"
                  >
                    <div class="form-group form-check d-flex">
                      <input
                        type="checkbox"
                        class="form-check-input align-self-center"
                        :id="item.id"
                      />
                      <label
                        class="form-check-label align-self-center"
                        :for="item.id"
                        :style="{
                          color: renderLabelColorValue(item.labelType),
                        }"
                      >
                        {{ item.name }}
                      </label>
                    </div>
                    <!-- button group -->
                    <div class="ml-auto">
                      <div class="btn-group btn-group-sm" role="group">
                        <button
                          type="button"
                          class="btn btn-second text-secondary"
                          @click="openTaskEditModal(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-pen"
                            style="font-size: 12px"
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary text-white"
                          @click="openTaskDeleteModal(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-trash-can"
                            style="font-size: 12px"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- /button group -->
                  </div>
                </transition-group>
              </draggable>
              <!-- /to do list -->
            </div>
            <!-- /to do section -->

            <!-- done section -->
            <div class="col-6">
              <div class="h2 text-info text-left mb-4 mx-4">
                Done
                <font-awesome-icon
                  v-if="
                    doneList.length >= (todoList.length + doneList.length) / 2 && (doneList.length != todoList.length + doneList.length && todoList.length!=0)
                  "
                  icon="fa-solid fa-star-half-stroke"
                  class="text-warning"
                />
                <font-awesome-icon
                  v-if="doneList.length == todoList.length + doneList.length"
                  icon="fa-solid fa-star"
                  class="text-warning"
                />
              </div>
              <!-- done list -->
              <draggable
                v-model="doneList"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                :move="getdata"
                @update="datadragEnd"
                class="list-group"
              >
                <transition-group
                  type="transition"
                  name="!drag ? 'flip-list' : null"
                >
                  <div
                    class="task-label mb-3 mx-4 d-flex bg-done"
                    style="border-left-color: #93d2d6"
                    v-for="item in doneList"
                    :key="item.id"
                  >
                    <div class="form-group form-check d-flex">
                      <input
                        type="checkbox"
                        class="form-check-input align-self-center"
                        :id="item.id"
                        checked
                      />
                      <label
                        class="form-check-label align-self-center"
                        :for="item.id"
                        :style="{
                          color: renderLabelColorValue(item.labelType),
                        }"
                      >
                        {{ item.name }}
                      </label>
                    </div>
                    <!-- button group -->
                    <div class="ml-auto">
                      <div class="btn-group btn-group-sm" role="group">
                        <button
                          type="button"
                          class="btn btn-second text-secondary"
                          @click="openTaskEditModal(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-pen"
                            style="font-size: 12px"
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary text-white"
                          @click="openTaskDeleteModal(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-trash-can"
                            style="font-size: 12px"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- /button group -->
                  </div>
                </transition-group>
              </draggable>
              <!-- /done list -->
            </div>
            <!-- /done section -->
          </div>
        </div>
      </section>
      <!-- /todo lists section -->
    </section>

    <!-- modal section -->
    <task-create-modal @submitEvent="sendCreateTask"></task-create-modal>
    <task-edit-modal
      :pickedTask="pickedTask"
      @submitEvent="sendEditTask"
    ></task-edit-modal>
    <delete-modal
      :pickedItem="pickedTask"
      :modalTitle="modalTitle"
      @submitEvent="sendDeleteTask"
    >
    </delete-modal>
    <!-- /modal section -->
  </section>
</template>


<script>
import taskCreateModal from "../modal/taskCreateModal.vue";
import taskEditModal from "../modal/taskEditModal.vue";
import deleteModal from "../modal/common/deledeModal.vue";
import draggable from "vuedraggable";

export default {
  components: {
    "task-create-modal": taskCreateModal,
    "task-edit-modal": taskEditModal,
    "delete-modal": deleteModal,
    draggable: draggable,
  },
  data() {
    return {
      pickedDate: new Date(),
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
      todoList: [
        { id: "TA01", name: "代辦事項1", labelType: "firstColor" },
        { id: "TA02", name: "代辦事項2", labelType: "secondColor" },
        { id: "TA03", name: "代辦事項3", labelType: "thirdColor" },
        { id: "TA04", name: "代辦事項4", labelType: "fourthColor" },
      ],
      doneList: [
        { id: "TA01", name: "完成事項1", labelType: "firstColor" },
        { id: "TA02", name: "完成事項2", labelType: "secondColor" },
        { id: "TA03", name: "完成事項3", labelType: "thirdColor" },
        { id: "TA04", name: "完成事項4", labelType: "fourthColor" },
      ],
      pickedTask: {},
      modalTitle: "代辦事項",
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: "task",
        disabled: false,
        chosenClass: "chosen",
      };
    },
  },
  methods: {
    openTaskCreateModal() {
      $("#taskCreateModal").modal({ backdrop: "static", keyboard: false });
    },
    openTaskEditModal(item) {
      let self = this;
      self.pickedTask = item;
      $("#taskEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openTaskDeleteModal(item) {
      let self = this;
      self.pickedTask = item;
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    sendCreateTask() {
      console.log("sendCreateTask");
    },
    sendEditTask() {
      console.log("sendEditTask");
    },
    sendDeleteTask() {
      console.log("sendDeleteTask");
    },
    getdata(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      console.log("拖動前的索引 :" + evt.oldIndex);
      console.log("拖動後的索引 :" + evt.newIndex);
    },
    renderLabelColorValue(color) {
      let value = "";
      switch (color) {
        case "firstColor":
          value = "#e53e3e";
          break;
        case "secondColor":
          value = "#dd6b20";
          break;
        case "thirdColor":
          value = "#d69e2e";
          break;
        case "fourthColor":
          value = "#38a169";
      }
      return value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.vc {
  &-container {
    border: none;
    --primary-100: #e0eff3;
    --primary-200: #c0e0e7;
    --primary-300: #a0d0db;
    --primary-400: #7ec1cf;
    --primary-500: #57b1c4;
    --primary-600: #17a2b8;
    --primary-700: #1e8597;
    --primary-800: #1f6977;
    --primary-900: #1d4e58;
  }
}

.task-label {
  padding: 1rem;
  border: 1.5px solid rgb(220, 220, 220);
  border-left-width: 0.25rem;
  border-radius: 0.25rem;
  min-width: 400px;
}

.bg-done {
  background-color: #cfeaec21;
  text-decoration: line-through;
}

.chosen {
  border: dashed 2px #f5cacf;
  background-color: #fff5f6;
}
</style>
