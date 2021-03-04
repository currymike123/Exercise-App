<template>
    <div class="container">
        <div class="columns">
            <div class="column is-one-third">
                <DashboardMenu />
            </div>
            <div class="column page-offset">
                <table class="table dash-offset">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Exercise</th>
                    <th>Reps</th>
                    <th>Sets</th>
                    <th>Distance</th>
                    <th>Duration</th>
                    
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                    <th>3/2/21</th>
                    <td>3:00 PM</td>
                    <td>Squats</td>
                    <td>10</td>
                    <td>10</td>
                    <td>N/A</td>
                    <td>30 mins</td> 
                    </tr>

                    <tr>
                    <th>3/1/21</th>
                    <td>1:00 PM</td>
                    <td>Bench</td>
                    <td>10</td>
                    <td>10</td>
                    <td>N/A</td>
                    <td>20 mins</td> 
                    </tr>

                    <tr>
                    <th>2/27/21</th>
                    <td>1:00 PM</td>
                    <td>RUN</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>1.1 miles</td>
                    <td>15 mins</td> 
                    </tr>
                    
                </tbody>
                </table>
            </div>
        <div class="column">
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