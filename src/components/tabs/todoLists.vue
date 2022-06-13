<template>
  <section class="container-fuild innerpage-min-width">
    <section class="row tracking-in-expand">
      <!-- monthly calender section -->
      <section class="col-3 innerpage-height">
        <div class="h5 text-first">{{ pickedDate }}</div>
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
          :first-day-of-week="2"
          :rows="2"
          @dayclick="onDayClick"
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
          <!-- no data reminder -->
          <div v-if="this.todoList.length == 0 && this.doneList.length == 0">
            <div class="d-flex text-left mx-4">
              <button
                type="button"
                class="btn btn-first text-white"
                @click="openTaskCreateModal"
              >
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <div class="mb-5 text-first">請點「+」按鈕開始建立代辦事項</div>
              <div class="align-self-center no-data-icon-bg rounded-circle">
                <font-awesome-icon
                  icon="fa-solid fa-clipboard-list"
                  size="10x"
                  class="text-white mt-5"
                />
              </div>
            </div>
          </div>
          <!-- /no data reminder -->

          <div v-else class="row">
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
                @change="dragColumn"
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
                    v-for="(item, index) in todoList"
                    :key="index"
                  >
                    <div class="form-group form-check d-flex">
                      <input
                        type="checkbox"
                        class="form-check-input align-self-center"
                        :id="item.taskId"
                        @click="onTodoListCheckboxClick(item)"
                      />
                      <label
                        class="form-check-label align-self-center"
                        :for="item.taskId"
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
                <!-- star icon -->
                <font-awesome-icon
                  v-if="
                    doneList.length >=
                      (todoList.length + doneList.length) / 2 &&
                    doneList.length != todoList.length + doneList.length &&
                    todoList.length != 0
                  "
                  icon="fa-solid fa-star-half-stroke"
                  class="text-warning"
                />
                <font-awesome-icon
                  v-if="
                    doneList.length == todoList.length + doneList.length &&
                    doneList.length != 0
                  "
                  icon="fa-solid fa-star"
                  class="text-warning"
                />
                <!-- /star icon -->
              </div>
              <!-- done list -->
              <draggable
                v-model="doneList"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                :move="getdata"
                @change="dragColumn"
                class="list-group"
              >
                <transition-group
                  type="transition"
                  name="!drag ? 'flip-list' : null"
                >
                  <div
                    class="task-label mb-3 mx-4 d-flex bg-done"
                    style="border-left-color: #93d2d6"
                    v-for="(item, index) in doneList"
                    :key="index"
                  >
                    <div class="form-group form-check d-flex">
                      <input
                        type="checkbox"
                        class="form-check-input align-self-center"
                        :id="item.taskId"
                        checked
                        @click="onDoneListCheckboxClick(item)"
                      />
                      <label
                        class="form-check-label align-self-center"
                        :for="item.taskId"
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
      :pickedTask="copyTask"
      :path="path"
      @submitEvent="sendEditTask"
    ></task-edit-modal>
    <delete-modal
      :pickedItem="copyTask"
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
import {
  apiTodoListQuery,
  apiTodoListOrderUpdate,
  apiTaskAdd,
  apiTaskUpdate,
  apiTaskDelete,
} from "../../api/index.js";

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
      todoListId: "",
      todoList: [],
      doneList: [],
      pickedTask: {},
      copyTask: {},
      path: "",
      modalTitle: "代辦事項",
    };
  },
  mounted() {
    let today = new Date();
    let dateStr = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    this.pickedDate = dateStr;
    apiTodoListQuery(this.$store.state.userId, dateStr).then((res) => {
      if (res.data) {
        this.todoListId = res.data.id;
        this.todoList = res.data.todoList;
        this.doneList = res.data.doneList;
      }
    });
  },
  watch: {
    pickedTask() {
      if (this.todoList.includes(this.pickedTask)) {
        this.path = "todoList";
      }
      if (this.doneList.includes(this.pickedTask)) {
        this.path = "doneList";
      }
    },
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
      self.copyTask = JSON.parse(JSON.stringify(self.pickedTask));
      $("#taskEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openTaskDeleteModal(item) {
      let self = this;
      self.pickedTask = item;
      self.copyTask = JSON.parse(JSON.stringify(self.pickedTask));
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    sendCreateTask(createItem) {
      let self = this;
      apiTaskAdd(
        self.$store.state.userId,
        self.pickedDate,
        createItem.name,
        createItem.labelType
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
      });
      $("#taskCreateModal").modal("hide");
    },
    sendEditTask(editItem) {
      let self = this;
      apiTaskUpdate(
        self.$store.state.userId,
        self.pickedDate,
        self.path,
        editItem.taskId,
        editItem.name,
        editItem.labelType
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
      });
      $("#taskEditModal").modal("hide");
    },
    sendDeleteTask(deleteItem) {
      let self = this;
      apiTaskDelete(
        self.$store.state.userId,
        self.pickedDate,
        self.path,
        deleteItem.taskId
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
        $("#deleteModal").modal("hide");
      });
    },
    onDayClick(day) {
      let self = this;
      apiTodoListQuery(self.$store.state.userId, day.id).then((res) => {
        if (res.data) {
          self.todoListId = res.data.id;
          self.todoList = res.data.todoList;
          self.doneList = res.data.doneList;
        } else {
          self.todoList = [];
          self.doneList = [];
        }
      });
    },
    onTodoListCheckboxClick(item) {
      let self = this;
      let idx = self.todoList.findIndex((i) => i.taskId === item.taskId);
      if (idx >= 0) {
        self.todoList.splice(idx, 1);
        self.doneList.push(item);
        apiTodoListOrderUpdate(
        self.$store.state.userId,
        self.pickedDate,
        self.todoListId,
        self.todoList,
        self.doneList
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
      });
      }
    },
    onDoneListCheckboxClick(item) {
      let self = this;
      let idx = self.doneList.findIndex((i) => i.taskId === item.taskId);
      if (idx >= 0) {
        self.doneList.splice(idx, 1);
        self.todoList.push(item);
        apiTodoListOrderUpdate(
        self.$store.state.userId,
        self.pickedDate,
        self.todoListId,
        self.todoList,
        self.doneList
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
      });
      }
    },
    getdata(evt) {},
    dragColumn(evt) {
      let self = this;
      apiTodoListOrderUpdate(
        self.$store.state.userId,
        self.pickedDate,
        self.todoListId,
        self.todoList,
        self.doneList
      ).then((res) => {
        self.todoList = res.data.todoList;
        self.doneList = res.data.doneList;
      });
    },
    formatDate() {},
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

.no-data-icon-bg {
  background-color: #a5dee536;
  width: 280px;
  height: 280px;
}
</style>
