<template>
  <div id="app" class="bg-color">
    <loading :active.sync="isLoading" background-color="#fff">
      <template slot="default">
        <img src="./assets/images/Spin-1s-50px.svg" />
      </template>
    </loading>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      bgImage: "",
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>

<style lang="scss">
@import "./assets/all";

.bg-color {
  background-color: #f8f6f3;
}
</style>
