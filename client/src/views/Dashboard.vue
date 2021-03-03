<template>
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
        <aside class="menu">

            <p class="menu-label">
            Dashboard
            </p>

            <ul class="menu-list">
            <li><a>History</a></li>
            <li><a>Progress</a></li>
            </ul>   

        </aside>
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
        <progress class="progress is-primary is-large" value="20" max="100">20</progress>
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
        <progress class="progress is-primary is-large" value="50" max="100">50</progress>
          
        
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
export default {

}
</script>

<style>
.dash-offset {
    margin-top: 10%;
}

</style>