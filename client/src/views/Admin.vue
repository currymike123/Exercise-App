<template>
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
        <aside class="menu">

            <p class="menu-label">
            Admin
            </p>

            <ul class="menu-list">
            <li><a>Reports</a></li>
            <li><a>Statistics</a></li>
            </ul>   

        </aside>
    </div>

    <div class="column page-offset">
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>Daily Usage</strong>
                    </p>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <p class="subtitle is-5">
                        minutes
                    </p>
                </div>
            </div>
        </nav>
        <progress class="progress is-primary is-large" value="20" max="100">20</progress>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>Daily Entries</strong>
                    </p>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <p class="subtitle is-5">
                        
                    </p>
                </div>
            </div>
        </nav>
        <progress class="progress is-primary is-large" value="50" max="100">50</progress>
          
        
            <table class="table admin-offset">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Pages Visited</th>
                    <th>Duration</th>
                    
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                    <th>3/2/21</th>
                    <td>3:00 PM</td>
                    <td>Notebook, Tracker</td>
                    <td>30 mins</td> 
                    </tr>

                    <tr>
                    <th>3/1/21</th>
                    <td>1:00 PM</td>
                    <td>Friends</td>
                    <td>20 mins</td> 
                    </tr>

                    <tr>
                    <th>2/27/21</th>
                    <td>1:00 PM</td>
                    <td>Tracker</td>
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
.admin-offset {
    margin-top: 10%;
}

</style>