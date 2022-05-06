<template>
  <section class="card text-center">
    <div class="card-header">
      <section class="text-right text-first h4">User</section>
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/habitTracker"
            >Habit trackers</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/todoLists"
            >Todo lists</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/innerPage/notes"
            >Notes</router-link
          >
        </li>
      </ul>
    </div>
    <section class="card-body">
      <h1 class="card-title">tab</h1>
      <router-view />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
