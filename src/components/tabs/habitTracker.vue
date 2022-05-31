<template>
  <section class="container-fuild innerpage-min-width">
    <section class="row tracking-in-expand">
      <!-- habit list section -->
      <section class="col-3 innerpage-height">
        <!-- {{ pickedDays }} -->
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
            <transition-group
              type="transition"
              name="!drag ? 'flip-list' : null"
            >
              <li
                v-for="item in habitList"
                :key="item.habitId"
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                :class="{ picked: pickedHabit.habitId == item.habitId }"
                @click="sendQueryHabitTracker(item)"
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
          @update:from-page="updatePage"
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
import { apiHabitsQuery, apiHabitTrackerQuery } from "../../api/index.js";

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
      pageYear: new Date().getFullYear(),
      pickedDays: [{ id: "2022-01-06", date: "2022-01-05T16:00:00.000Z" }],
      date: new Date(),
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
      habitList: [
        // { habitId: "1", name: "吃早餐", checkColor: "red" },
        // { habitId: "2", name: "喝水2000cc", checkColor: "yellow" },
        // { habitId: "3", name: "寫技術部落格", checkColor: "green" },
        // { habitId: "4", name: "伸展10分鐘", checkColor: "teal" },
        // { habitId: "5", name: "睡前保養", checkColor: "blue" },
        // { habitId: "6", name: "12點前就寢", checkColor: "pink" },
        // { habitId: "7", name: "戴維持器", checkColor: "pink" },
      ],
      pickedHabit: {},
      modalTitle: "原子習慣",
      drag: false,
    };
  },
  mounted() {
    apiHabitsQuery(this.$store.state.userId).then((res) => {
      console.log(res.data);
      this.habitList = res.data.habitList;
      if (this.habitList.length > 0) {
        this.pickedHabit = this.habitList[0];
        apiHabitTrackerQuery(
          this.$store.state.userId,
          this.pickedHabit.habitId,
          this.pageYear
        ).then((res) => {
          this.pickedDays = res.data.pickedDays;
        });
      }
    });
  },
  computed: {
    fromDate() {
      return new Date(this.pageYear, 0, 1);
    },
    dates() {
      return this.pickedDays.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: this.pickedHabit.checkColor,
        dates: date,
      }));
    },
    dragOptions() {
      return {
        animation: 300,
        disabled: false,
        chosenClass: "chosen",
      };
    },
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
    sendCreateHabit() {
      console.log("sendCreateHabit");
    },
    sendEditHabit() {
      console.log("sendEditHabit");
    },
    sendDeleteHabit() {
      console.log("sendDeleteHabit");
    },
    sendQueryHabitTracker(item) {
      let self = this;
      self.pickedHabit = item;
      apiHabitTrackerQuery(self.$store.state.userId, item.habitId, self.pageYear).then(
        (res) => {
          console.log(res.data.pickedDays);
          this.pickedDays = res.data.pickedDays;
        }
      );
    },
    onDayClick(day) {
      let self = this;
      let idx = self.pickedDays.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        self.pickedDays.splice(idx, 1);
      } else {
        self.pickedDays.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    updatePage(page) {
      let self = this;
      if (self.habitList.length > 0) {
        self.pageYear = page.year;
        apiHabitTrackerQuery(
          self.$store.state.userId,
          self.pickedHabit.habitId,
          page.year
        ).then((res) => {
          console.log(res.data);
          self.pickedDays = res.data.pickedDays;
        });
      }
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
.chosen {
  border: dashed 2px #a5dee5;
  background-color: #e4f5f9;
}
.picked {
  background-color: #e4f5f9;
}
</style>