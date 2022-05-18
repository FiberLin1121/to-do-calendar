<template>
  <section class="container-fuild innerpage-min-width innerpage-height">
    <div class="dot-decoration-header p-5"></div>
    <!-- plus button -->
    <div class="text-left mb-5">
      <button
        type="button"
        class="btn btn-first text-white"
        @click="openNoteCreateModal"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
    <!-- /plus button -->
    <div class="row">
      <div class="col-3">
        <draggable
          v-model="list1"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          :move="getdata"
          @update="datadragEnd"
          class="list-group mr-4"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list1"
              :key="item.id"
              class="note p-5 mb-5"
              :style="{ backgroundColor: item.bgColor }"
            >
              <div
                class="masking-tape bg-first"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/images/masking-tape-' +
                      item.tapeStyle +
                      '.jpg') +
                    ')',
                }"
              ></div>
              <!-- button group -->
              <div class="text-right mb-3">
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteEditModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-pen"
                      style="font-size: 12px"
                    />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteDeleteModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-trash-can"
                      style="font-size: 12px"
                    />
                  </button>
                </div>
              </div>
              <!-- /button group -->
              <h5>{{ item.name }}</h5>
              <hr />
              <pre class="text-secondary">{{ item.content }}</pre>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="col-3">
        <draggable
          v-model="list2"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          :move="getdata"
          @update="datadragEnd"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list2"
              :key="item.id"
              class="note p-5 mb-5"
              :style="{ backgroundColor: item.bgColor }"
            >
              <div
                class="masking-tape bg-first"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/images/masking-tape-' +
                      item.tapeStyle +
                      '.jpg') +
                    ')',
                }"
              ></div>
              <!-- button group -->
              <div class="text-right mb-3">
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteEditModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-pen"
                      style="font-size: 12px"
                    />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteDeleteModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-trash-can"
                      style="font-size: 12px"
                    />
                  </button>
                </div>
              </div>
              <!-- /button group -->
              <h5>{{ item.name }}</h5>
              <hr />
              <pre class="text-secondary">{{ item.content }}</pre>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="col-3">
        <draggable
          v-model="list3"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          :move="getdata"
          @update="datadragEnd"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list3"
              :key="item.id"
              class="note p-5 mb-5"
              :style="{ backgroundColor: item.bgColor }"
            >
              <div
                class="masking-tape"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/images/masking-tape-' +
                      item.tapeStyle +
                      '.jpg') +
                    ')',
                }"
              ></div>
              <!-- button group -->
              <div class="text-right mb-3">
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteEditModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-pen"
                      style="font-size: 12px"
                    />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteDeleteModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-trash-can"
                      style="font-size: 12px"
                    />
                  </button>
                </div>
              </div>
              <!-- /button group -->
              <h5>{{ item.name }}</h5>
              <hr />
              <pre class="text-secondary">{{ item.content }}</pre>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="col-3">
        <draggable
          v-model="list4"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          :move="getdata"
          @update="datadragEnd"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list4"
              :key="item.id"
              class="note p-5 mb-5"
              :style="{ backgroundColor: item.bgColor }"
            >
              <div
                class="masking-tape bg-first"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/images/masking-tape-' +
                      item.tapeStyle +
                      '.jpg') +
                    ')',
                }"
              ></div>
              <!-- button group -->
              <div class="text-right mb-3">
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteEditModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-pen"
                      style="font-size: 12px"
                    />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light text-secondary"
                    @click="openNoteDeleteModal(item)"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-trash-can"
                      style="font-size: 12px"
                    />
                  </button>
                </div>
              </div>
              <!-- /button group -->
              <h5>{{ item.name }}</h5>
              <hr />
              <pre class="text-secondary">{{ item.content }}</pre>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>

    <!-- modal section -->
    <note-create-modal @submitEvent="sendCreateNote"></note-create-modal>
    <note-edit-modal
      :pickedNote="pickedNote"
      @submitEvent="sendEditNote"
    ></note-edit-modal>
    <delete-modal
      :pickedItem="pickedNote"
      :modalTitle="modalTitle"
      @submitEvent="sendDeleteNote"
    ></delete-modal>
    <!-- /modal section -->
  </section>
</template>

<script>
import noteCreateModal from "../modal/noteCreateModal.vue";
import noteEditModal from "../modal/noteEditModal.vue";
import deleteModal from "../modal/common/deledeModal.vue";
import draggable from "vuedraggable";

export default {
  components: {
    "note-create-modal": noteCreateModal,
    "note-edit-modal": noteEditModal,
    "delete-modal": deleteModal,
    draggable: draggable,
  },
  data() {
    return {
      list1: [
        {
          id: "N01",
          name: "title1",
          content: "aaa",
          bgColor: "#f7e3cb",
          tapeStyle: "06",
        },
        {
          id: "N05",
          name: "title5",
          content: "eee",
          bgColor: "#d7ebf4",
          tapeStyle: "04",
        },
      ],
      list2: [
        {
          id: "N02",
          name: "title2",
          content: "bbb",
          bgColor: "#ddeee8",
          tapeStyle: "02",
        },
        {
          id: "N07",
          name: "title7",
          content: "fff",
          bgColor: "#e7d4e8",
          tapeStyle: "05",
        },
      ],
      list3: [
        {
          id: "N03",
          name: "title3",
          content: "ccc",
          bgColor: "#f6d8e4",
          tapeStyle: "03",
        },
        {
          id: "N08",
          name: "title8",
          content: "fff",
          bgColor: "#d7ebf4",
          tapeStyle: "01",
        },
      ],
      list4: [
        {
          id: "N04",
          name: "title4",
          content: "ddd",
          bgColor: "#fff8b7",
          tapeStyle: "04",
        },
        {
          id: "N06",
          name: "title6",
          content: "ddd",
          bgColor: "#ddeee8",
          tapeStyle: "02",
        },
      ],
      pickedNote: {},
      modalTitle: "便條貼",
    };
  },
  mounted() {},
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    openNoteCreateModal() {
      $("#noteCreateModal").modal({ backdrop: "static", keyboard: false });
    },
    openNoteEditModal(item) {
      let self = this;
      self.pickedNote = item;
      $("#noteEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openNoteDeleteModal(item) {
      let self = this;
      self.pickedNote = item;
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    sendCreateNote() {
      console.log("sendCreateNote");
    },
    sendEditNote() {
      console.log("sendEditNote");
    },
    sendDeleteNote() {
      console.log("sendDeleteNote");
    },
    getdata(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      console.log("拖動前的索引 :" + evt.oldIndex);
      console.log("拖動後的索引 :" + evt.newIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  border: none;
  overflow: hidden;
}

pre {
  font-family: "Segoe UI";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

.dot-decoration-header {
  background-image: url("~@/assets/images/dot-decoration-header.png");
  background-size: 65%;
  background-position: top;
}

.note {
  position: relative;
  box-shadow: 2px 3px 3px 1px #bdbdbd6b;
}

.masking-tape {
  position: absolute;
  top: -15px;
  right: 85px;
  width: 150px;
  height: 40px;
  transform: rotate(2deg);
  background-position: center center;
}
</style>
