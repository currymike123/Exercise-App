<template>
  <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <aside class="menu">

                <p class="menu-label">
                Friends
                </p>

                <ul class="menu-list">
                <li><a>Feed</a></li>
                </ul>   

            </aside>
            
            <div class="control friends-search">
               <input class="input" type="text">
            </div>
            <div class="field">
              <p class="control mt-1">
               <button class="button is-success">
                Search
               </button>
              </p>
            </div>

            <div class="card m-6">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://www.randomlists.com/img/people/ray_romano.webp" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://www.randomlists.com/img/people/ray_romano.webp" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  This is my short bio
                  
                </div>
              </div>
              <footer class="card-footer">
              <a href="#" class="card-footer-item">Friend</a>
              <a href="#" class="card-footer-item">UnFriend</a>
            </footer>
            </div>
            





        </div>
        <div class="column page-offset">
              <div class="card">
                <header class="card-header level">
                    <p class="card-header-title level-left">
                      John Smith
                    </p>
                    <div class="level-right pr-3">
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016 </time>
                    </div>
                
                </header>
                <div class="card-content">
                    <div class="content">
                        <label class="label mt-1">Exercise</label>
                        <div class="content">
                          100 lb lift 
                        </div>
                        <label class="label mt-1">Reps</label>
                        <div class="content">
                          5 
                        </div>
                        <label class="label mt-1">Sets</label>
                        <div class="content">
                         10
                        </div>
                        <label class="label mt-1">Distance</label>
                        <div class="content">
                          5 miles
                        </div>
                        <label class="label mt-1">Duration</label>
                        <div class="content">
                          30 mins.
                        </div>
                        <label class="label mt-1">Notes</label>
                        <div class="content">
                          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. 
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="column page-offset">
              <div class="card">
                <header class="card-header level">
                    <p class="card-header-title level-left">
                      Jane Doe
                    </p>
                    <div class="level-right pr-3">
                      <time datetime="2016-1-1">5:09 PM - 1 Feb 2020 </time>
                    </div>
                
                </header>
                <div class="card-content">
                    <div class="content">
                        <label class="label mt-1">Exercise</label>
                        <div class="content">
                          Run
                        </div>
                        <label class="label mt-1">Reps</label>
                        <div class="content">
                          N/A
                        </div>
                        <label class="label mt-1">Sets</label>
                        <div class="content">
                         N/A
                        </div>
                        <label class="label mt-1">Distance</label>
                        <div class="content">
                          5 miles
                        </div>
                        <label class="label mt-1">Duration</label>
                        <div class="content">
                          30 mins.
                        </div>
                        <label class="label mt-1">Notes</label>
                        <div class="content">
                          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. 
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.friends-search {
  padding-top: 20%;
}

</style>