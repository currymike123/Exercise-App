<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <aside class="menu">
          <p class="menu-label">
            Friends
          </p>
        </aside>

        <article class="panel is-success mt-6">
          <p class="panel-tabs">
            <a>Search</a>
            <a>Friends</a>
            <a>Suggest</a>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input is-success"
                type="text"
                placeholder="Search"
              />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>

          <a class="panel-block">
            <figure class="image is-48x48">
              <img
                src="https://www.randomlists.com/img/people/ray_romano.webp"
                alt="Placeholder image"
              />
            </figure>
            <div class="ml-3">John Smith</div>
          </a>
          <a class="panel-block">
            <figure class="image is-48x48">
              <img
                src="https://www.randomlists.com/img/people/courteney_cox.webp"
                alt="Placeholder image"
              />
            </figure>
            <div class="ml-3">Jane Doe</div>
          </a>
        </article>

        <div class="card m-6">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://www.randomlists.com/img/people/ray_romano.webp"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://www.randomlists.com/img/people/ray_romano.webp"
                    alt="Placeholder image"
                  />
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
        <FriendPost />
      </div>
      <div class="column page-offset">
        <FriendPost />
      </div>
    </div>
  </div>
</template>

<script>
import FriendPost from "../components/FriendPost";
export default {
  components: {
    FriendPost,
  },
};
</script>

<style>
.friends-search {
  padding-top: 12%;
}
</style>
