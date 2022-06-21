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
    <div class="row tracking-in-expand">
      <div class="col-3">
        <draggable
          v-model="list1"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          :move="getdata"
          @change="dragColumn"
          class="list-group mr-4"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list1"
              :key="item.noteId"
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
          @change="dragColumn"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list2"
              :key="item.noteId"
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
          @change="dragColumn"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list3"
              :key="item.noteId"
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
          @change="dragColumn"
          class="list-group mr-3"
          group="notes"
        >
          <transition-group type="transition" name="!drag ? 'flip-list' : null">
            <div
              v-for="item in list4"
              :key="item.noteId"
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
      :pickedNote="copyNote"
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
import {
  apiNotesQuery,
  apiNoteAdd,
  apiNoteUpdate,
  apiNoteDelete,
  apiNotesOrderUpdate,
} from "../../api/index.js";
export default {
  components: {
    "note-create-modal": noteCreateModal,
    "note-edit-modal": noteEditModal,
    "delete-modal": deleteModal,
    draggable: draggable,
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      pickedNote: {},
      copyNote: {},
      path: "",
      modalTitle: "便條貼",
    };
  },
  mounted() {
    apiNotesQuery(this.$store.state.userId).then((res) => {
      if (res.data) {
        this.list1 = res.data.list1;
        this.list2 = res.data.list2;
        this.list3 = res.data.list3;
        this.list4 = res.data.list4;
      }
    });
  },
  watch: {
    pickedNote() {
      if (this.list1.includes(this.pickedNote)) {
        this.path = "list1";
      } else if (this.list2.includes(this.pickedNote)) {
        this.path = "list2";
      } else if (this.list3.includes(this.pickedNote)) {
        this.path = "list3";
      } else if (this.list4.includes(this.pickedNote)) {
        this.path = "list4";
      }
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: "note",
        disabled: false,
        chosenClass: "chosen",
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
      self.copyNote = JSON.parse(JSON.stringify(self.pickedNote));
      $("#noteEditModal").modal({ backdrop: "static", keyboard: false });
    },
    openNoteDeleteModal(item) {
      let self = this;
      self.pickedNote = item;
      $("#deleteModal").modal({ backdrop: "static", keyboard: false });
    },
    sendCreateNote(createItem) {
      let self = this;
      apiNoteAdd(
        self.$store.state.userId,
        createItem.name,
        createItem.content,
        createItem.bgColor,
        createItem.tapeStyle
      ).then((res) => {
        self.list1 = res.data.list1;
        self.list2 = res.data.list2;
        self.list3 = res.data.list3;
        self.list4 = res.data.list4;
        $("#noteCreateModal").modal("hide");
      });
    },
    sendEditNote(editItem) {
      let self = this;
      apiNoteUpdate(
        self.$store.state.userId,
        self.path,
        editItem.noteId,
        editItem.name,
        editItem.content,
        editItem.bgColor,
        editItem.tapeStyle
      ).then((res) => {
        self.list1 = res.data.list1;
        self.list2 = res.data.list2;
        self.list3 = res.data.list3;
        self.list4 = res.data.list4;
        $("#noteEditModal").modal("hide");
      });
    },
    sendDeleteNote(deleteItem) {
      let self = this;
      apiNoteDelete(
        self.$store.state.userId,
        self.path,
        deleteItem.noteId
      ).then((res) => {
        self.list1 = res.data.list1;
        self.list2 = res.data.list2;
        self.list3 = res.data.list3;
        self.list4 = res.data.list4;
        $("#deleteModal").modal("hide");
      });
    },
    getdata(evt) {},
    dragColumn(evt) {
      let self = this;
      apiNotesOrderUpdate(
        self.$store.state.userId,
        self.list1,
        self.list2,
        self.list3,
        self.list4
      ).then((res) => {});
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

.chosen {
  border: dashed 3px #f0a9b2;
}
</style>
