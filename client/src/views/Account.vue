<template>
  <div class="container">
     <div class="columns">
        <div class="column is-one-third">
            <AdminMenu />
        </div>
    
        <div class="column is-half page-offset">

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="First">
                        
                    </p>
                    </div>
                    <div class="field">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Last">
                        
                    </p>
                    </div>
                </div>
                </div>

                 <div class="field is-horizontal">
                <div class="field-label is-normal">
                     <label class="label">Email</label>
                </div>
                <div class="field-body">
                    <div class="field is-expanded">
                    
                        <p class="control"></p>
                        <p class="control is-expanded">
                        <input class="input" type="tel" placeholder="Email">
                        </p>
                    
                  
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label is-normal">
                     <label class="label">Phone</label>
                </div>
                <div class="field-body">
                    <div class="field is-expanded">
                    
                        <p class="control"></p>
                        <p class="control is-expanded">
                        <input class="input" type="tel" placeholder="Phone">
                        </p>
                    
                  
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Password</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Password">
                        
                    </p>
                    </div>
                    <div class="field">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Verify Password">
                        
                    </p>
                    </div>
                </div>
                </div>

                

                <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                        Update
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            
        </div>
        <div class="column"></div>
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

</style>