<template>
  <section class="container-fuild innerpage-min-width">
    <section class="row">
      <!-- habit list section -->
      <section class="col-3 innerpage-height">
        <div class="container">
          <!-- plus button -->
          <div class="text-left mb-4">
            <button
              type="button"
              class="btn btn-first text-white"
              @click="openHabitCreateModal"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
          <!-- /plus button -->

          <!-- list group -->
          <draggable
            v-model="habitList"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            :move="getdata"
            @update="datadragEnd"
            class="list-group"
          >
            <transition-group type="transition" name="!drag ? 'flip-list' : null">
              <li
                v-for="item in habitList"
                :key="item.id"
                class="
                  list-group-item list-group-item-action
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                {{ item.name }}

                <!-- button group -->
                <div class="text-right">
                  <div class="btn-group btn-group-sm" role="group">
                    <button
                      type="button"
                      class="btn btn-second text-secondary"
                      @click="openHabitEditModal(item)"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-pen"
                        style="font-size: 12px"
                      />
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary text-white"
                      @click="openDeleteModal(item)"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-trash-can"
                        style="font-size: 12px"
                      />
                    </button>
                  </div>
                </div>
                <!-- /button group -->
              </li>
            </transition-group>
          </draggable>
          <!-- /list group -->
        </div>
      </section>
      <!-- /habit list section -->

      <!-- year calendar section -->
      <section class="col-9 innerpage-height">
        <div class="dot-decoration-header p-5"></div>
        <!-- <p>{{ pickedDays }}</p> -->
        <v-calendar
          :step="12"
          :from-date="fromDate"
          :attributes="attributes"
          :rows="3"
          :columns="4"
          @dayclick="onDayClick"
          v-model="pickedDays"
          :model-config="modelConfig"
        />
        <div class="dot-decoration-footer p-5"></div>
      </section>
      <!-- /year calendar section -->
    </section>

    <!-- modal section -->
    <habit-create-modal @submitEvent="sendCreateHabit"></habit-create-modal>
    <habit-edit-modal
      :pickedHabit="pickedHabit"
      @submitEvent="sendEditHabit"
    ></habit-edit-modal>
    <delete-modal
      :pickedItem="pickedHabit"
      :modalTitle="modalTitle"
      @submitEvent="sendDeleteHabit"
    ></delete-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import habitCreateModal from "../modal/habitCreateModal.vue";
import habitEditModal from "../modal/habitEditModal";
import deleteModal from "../modal/common/deledeModal.vue";
import draggable from "vuedraggable";

export default {
  name: "habitTracker",
  components: {
    "habit-edit-modal": habitEditModal,
    "habit-create-modal": habitCreateModal,
    "delete-modal": deleteModal,
    draggable: draggable,
  },
  data() {
    return {
      checkColor: "teal",
      thisYear: new Date().getFullYear(),
      pickedDays: [],
      date: new Date(),
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
      habitList: [
        { id: "1", name: "吃早餐", checkColor: "red" },
        { id: "2", name: "喝水2000cc", checkColor: "yellow" },
        { id: "3", name: "寫技術部落格", checkColor: "green" },
        { id: "4", name: "伸展10分鐘", checkColor: "teal" },
        { id: "5", name: "睡前保養", checkColor: "blue" },
        { id: "6", name: "12點前就寢", checkColor: "pink" },
        { id: "7", name: "戴維持器", checkColor: "pink" },
      ],
      pickedHabit: {},
      modalTitle: "原子習慣",
      drag: false,
    };
  },
  mounted() {},
  computed: {
    fromDate() {
      return new Date(this.thisYear, 0, 1);
    },
    dates() {
      return this.pickedDays.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: this.checkColor,
        dates: date,
      }));
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    date: function () {
      console.log(this.date);
    },
  },
  methods: {
    openHabitCreateModal() {
      $("#habitCreateModal").modal({ backdrop: "static", keyboard: false });
    },
    openHabitEditModal(item) {
      let self = this;
      self.pickedHabit = item;
      $("#habitEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openDeleteModal(item) {
      let self = this;
      self.pickedHabit = item;
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    onDayClick(day) {
      let idx = this.pickedDays.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.pickedDays.splice(idx, 1);
      } else {
        this.pickedDays.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    sendCreateHabit() {
      console.log("sendCreateHabit");
    },
    sendEditHabit() {
      console.log("sendEditHabit");
    },
    sendDeleteHabit() {
      console.log("sendDeleteHabit");
    },
    getdata(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      console.log("拖動前的索引 :" + evt.oldIndex);
      console.log("拖動後的索引 :" + evt.newIndex);
      console.log(this.tags);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
