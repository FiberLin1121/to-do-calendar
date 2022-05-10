<template>
  <div id="app" class="bg-color">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImage: "",
    };
  },
};
</script>

<style lang="scss">
@import "./assets/all";

.bg-color {
  background-color: #f8f6f3;
}
</style>
