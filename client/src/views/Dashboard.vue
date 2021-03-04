<template>
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
       <DashboardMenu />
    </div>

    <div class="column page-offset">
        <section class="section">
        <h1 class="title">Welcome to the Dashboard</h1>
        <h2 class="subtitle">
            You can track your exercise progress.
        </h2>
        </section>
    </div>
</div>
</div>

</template>

<script>
import DashboardMenu from "@/components/DashboardMenu"

export default {
  components: {
    DashboardMenu
  }
}
</script>

<style>


</style>