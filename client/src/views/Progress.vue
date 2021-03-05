<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <DashboardMenu />
      </div>
      <div class="column page-offset">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>Distance</strong>
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>Goal</strong>
              </p>
            </div>
          </div>
        </nav>
        <progress class="progress is-primary is-large" value="20" max="100"
          >20</progress
        >
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>Reps</strong>
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>Goal</strong>
              </p>
            </div>
          </div>
        </nav>
        <progress class="progress is-primary is-large" value="50" max="100"
          >50</progress
        >
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import DashboardMenu from "@/components/DashboardMenu";

export default {
  components: {
    DashboardMenu,
  },
};
</script>

<style></style>
