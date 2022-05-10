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
          <ul class="list-group">
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
                    @click="openHabitEditModal"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-pen"
                      style="font-size: 12px"
                    />
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary text-white"
                    @click="openDeleteModal"
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
          </ul>
          <!-- /list group -->
        </div>
      </section>
      <!-- /habit list section -->

      <!-- calendar section -->
      <section class="col-9 innerpage-height">
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
      </section>
      <!-- /calendar section -->
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

export default {
  name: "habitTracker",
  components: {
    "habit-edit-modal": habitEditModal,
    "habit-create-modal": habitCreateModal,
    "delete-modal": deleteModal,
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
      pickedHabit: { name: "test", checkColor: "pink" },
      modalTitle: "原子習慣",
    };
  },
  mounted() {
    // console.log(this.date + " by mounted");
    let dateStr =
      this.date.getFullYear() +
      "-" +
      (this.date.getMonth() + 1) +
      "-" +
      this.date.getDate();
    console.log(dateStr);
  },
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
    openHabitEditModal() {
      $("#habitEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openDeleteModal() {
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    onDayClick(day) {
      const idx = this.pickedDays.findIndex((d) => d.id === day.id);
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
</style>
