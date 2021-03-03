<template>
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
        <AdminMenu />
    </div>

    <div class="column page-offset">
        <section class="section">
        <h1 class="title">Welcome to Will!</h1>
        <h2 class="subtitle">
            Please fill out the <router-link to="/account">Account</router-link> section for a better experience.
        </h2>
        </section>
    </div>
    
</div>
</div>

</template>

<script>

import AdminMenu from "@/components/AdminMenu"

export default {
  components: {
    AdminMenu
  }
}
</script>

<style>
.admin-offset {
    margin-top: 10%;
}

</style>