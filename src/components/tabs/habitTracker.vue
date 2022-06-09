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
              title="新增原子習慣"
              class="btn btn-first text-white"
              @click="openHabitCreateModal"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
          <!-- /plus button -->

          <div v-if="habitList.length==0">
            <div class="mb-5 text-first">請點「+」按鈕開始建立原子習慣</div>
            <div>
              <font-awesome-icon icon="fa-solid fa-calendar" size="10x" class="no-data-icon-color" />
            </div>
          </div>
          
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
                      title="編輯原子習慣"
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
                      title="刪除原子習慣"
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
          :first-day-of-week="2"
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
      :pickedHabit="copyHabit"
      @submitEvent="sendEditHabit"
    ></habit-edit-modal>
    <delete-modal
      :pickedItem="copyHabit"
      :modalTitle="modalTitle"
      @submitEvent="sendDeleteHabit"
    ></delete-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import habitCreateModal from "../modal/habitCreateModal.vue";
import habitEditModal from "../modal/habitEditModal.vue";
import deleteModal from "../modal/common/deledeModal.vue";
import draggable from "vuedraggable";
import {
  apiHabitsQuery,
  apiHabitsOrderUpdate,
  apiHabitTrackerQuery,
  apiHabitAdd,
  apiHabitUpdate,
  apiHabitDelete,
  apiPickedDayAdd,
  apiPickedDayRemove,
} from "../../api/index.js";

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
      pickedDays: [],
      date: new Date(),
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
      habitsId:"",
      habitList: [],
      pickedHabit: {},
      copyHabit:{},
      modalTitle: "原子習慣",
      drag: false,
    };
  },
  mounted() {
    apiHabitsQuery(this.$store.state.userId).then((res) => {
      this.habitList = res.data.habitList;
      this.habitsId = res.data.habitsId;
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
  methods: {
    openHabitCreateModal() {
      $("#habitCreateModal").modal({ backdrop: "static", keyboard: false });
    },
    openHabitEditModal(item) {
      let self = this;
      self.pickedHabit = item;
      self.copyHabit = JSON.parse(JSON.stringify(self.pickedHabit));
      $("#habitEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openDeleteModal(item) {
      let self = this;
      self.pickedHabit = item;
      self.copyHabit = JSON.parse(JSON.stringify(self.pickedHabit));
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    sendCreateHabit(createItem) {
      let self = this;
      apiHabitAdd(self.$store.state.userId, createItem.name, createItem.checkColor).then((res) => {
        self.habitList = res.data.habitList;
        if (this.habitList.length > 0) {
          this.pickedHabit = this.habitList[this.habitList.length-1];
          self.pickedDays = [];
        }
        $("#habitCreateModal").modal("hide");
      });
    },
    sendEditHabit(editItem) {
      let self = this;
      apiHabitUpdate(self.$store.state.userId, editItem.habitId, editItem.name, editItem.checkColor).then((res) => {
        self.habitList = res.data.habitList;
        self.pickedHabit = editItem;
        $("#habitEditModal").modal("hide");
      });
    },
    sendDeleteHabit(deleteItem) {
       let self = this;
      apiHabitDelete(self.$store.state.userId, deleteItem.habitId).then((res) => {
        self.habitList = res.data.habitList;
        $("#deleteModal").modal("hide");
          if (self.habitList.length > 0) {
          self.pickedHabit = self.habitList[0];
          self.sendQueryHabitTracker(self.pickedHabit);
          }
      });
    },
    sendQueryHabitTracker(item) {
      let self = this;
      self.pickedHabit = item;
      self.pickedDays = [];
      apiHabitTrackerQuery(
        self.$store.state.userId,
        item.habitId,
        self.pageYear
      ).then((res) => {
        self.pickedDays = res.data.pickedDays;
      });
    },
    onDayClick(day) {
      let self = this;
      let idx = self.pickedDays.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        apiPickedDayRemove(
          self.$store.state.userId,
          self.pickedHabit.habitId,
          self.pageYear,
          day
        ).then((res) => {
          this.pickedDays = res.data.pickedDays;
        });
        // self.pickedDays.splice(idx, 1);
      } else {
        apiPickedDayAdd(
          self.$store.state.userId,
          self.pickedHabit.habitId,
          self.pageYear,
          day
        ).then((res) => {
          this.pickedDays = res.data.pickedDays;
        });
        // self.pickedDays.push({
        //   id: day.id,
        //   date: day.date,
        // });
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
          self.pickedDays = res.data.pickedDays;
        });
      }
    },
    getdata(evt) {
      
    },
    datadragEnd(evt) {
      let self = this;
      apiHabitsOrderUpdate(
        self.$store.state.userId,
        self.pickedHabit.habitId,
        self.habitList
        ).then((res=>{
          self.habitList = res.data.habitList;
        }));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-data-icon-color {
  color: rgb(165 222 229 / 21%)
}

.chosen {
  border: dashed 2px #a5dee5;
  background-color: #e4f5f9;
}
.picked {
  background-color: #e4f5f9;
}
</style>