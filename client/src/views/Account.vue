<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <AdminMenu />
      </div>

      <div class="column is-half page-offset">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Bio</label>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <p class="control"></p>
              <p class="control is-expanded">
                <textarea
                  class="textarea"
                  v-model="bio"
                  placeholder="Bio"
                ></textarea>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Picture</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="file has-name is-boxed">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    @change="acceptImage"
                    accept="image/*"
                  />
                  <span class="file-cta">
                    <img style="max-height:150px;" :src="image" alt="" />
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    {{ fileName }}
                  </span>
                </label>
              </div>
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
                <button class="button is-primary" v-on:click="update">
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
import AdminMenu from "@/components/AdminMenu";
//import { getSessionUser, updateUsers } from "../models/Users";
//import { getUser } from "../models/Session";
import Session from "../models/Session";

export default {
  data: () => ({
    user: {},
    image: "",
    bio: "",
    fileName: "Picture.jpg",
  }),
  components: {
    AdminMenu,
  },
  mounted() {
    //let currentUser = getUser();
    console.log(this.bio);
    this.user = Session.user;
  },
  methods: {
    acceptImage(data) {
      console.log("triggered");
      const currentImage = data.target.files[0];
      this.processBase64(currentImage);
    },
    processBase64(imageFile) {
      const reader = new FileReader();

      reader.onload = (x) => {
        this.image = x.target.result;
      };

      reader.readAsDataURL(imageFile);

      this.fileName = imageFile.name;
      console.log(this.bio);
    },
    update() {
      //send the user, image, and bio to the server
    },
  },
};
</script>

<style></style>
