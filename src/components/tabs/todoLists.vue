<template>
  <section class="container-fuild innerpage-min-width">
    <section class="row">
      <!-- monthly calender section -->
      <section class="col-3 innerpage-height">
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
        <div class="container">
          <!-- plus button -->
          <div class="text-left mb-4">
            <button type="button" class="btn btn-first text-white">
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
          <!-- /plus button -->
          <div class="row">
            <!-- to do section -->
            <div class="col-6">
              <div class="h2 mb-4">To Do</div>

              <!-- to do list -->
              <draggable
                v-model="doneList"
                :move="getdata"
                @update="datadragEnd"
                class="list-group"
              >
                <transition-group type="transition" name="flip-list">
                  <div
                    class="task-label mb-3 mx-4 d-flex"
                    :style="{
                      borderLeftColor: renderLabelColorValue(item.label),
                    }"
                    v-for="item in doneList"
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
                          color: renderLabelColorValue(item.label),
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
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-pen"
                            style="font-size: 12px"
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary text-white"
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
              <div class="h2 mb-4">Done</div>
              <!-- done list -->
              <draggable
                v-model="todoList"
                :move="getdata"
                @update="datadragEnd"
                class="list-group"
              >
                <transition-group type="transition" name="flip-list">
                  <div
                    class="task-label mb-3 mx-4 d-flex bg-done"
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
                          color: renderLabelColorValue(item.label),
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
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-pen"
                            style="font-size: 12px"
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary text-white"
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
  </section>
</template>


<script>
import draggable from "vuedraggable";
export default {
  components: {
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
        { id: "TA01", name: "代辦事項1", label: "firstColor" },
        { id: "TA02", name: "代辦事項2", label: "secondColor" },
        { id: "TA03", name: "代辦事項3", label: "thirdColor" },
        { id: "TA04", name: "代辦事項4", label: "fourthColor" },
      ],
       doneList: [
        { id: "TA01", name: "代辦事項1", label: "firstColor" },
        { id: "TA02", name: "代辦事項2", label: "secondColor" },
        { id: "TA03", name: "代辦事項3", label: "thirdColor" },
        { id: "TA04", name: "代辦事項4", label: "fourthColor" },
      ],
    };
  },
  methods: {
    getdata(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      console.log("拖動前的索引 :" + evt.oldIndex);
      console.log("拖動後的索引 :" + evt.newIndex);
      console.log(this.tags);
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

.bg-done{
  background-color: rgba(220, 220, 220, 0.26);
}
</style>
