//Array of all users entries
import { api } from "../models/myFetch";

export function GetMyPosts() {
  return api("posts");
}

export async function GetPostsForUser(handle) {
  return await api(`posts/${handle}`);
}

export function GetMyFeed() {
  return api("posts/feed");
}

export async function AddPost(post) {
  return await api("posts", post);
}

export function DeletePost(post_id) {
  // This wont actually delete the correct item unless you are an administrator viewing all posts.
  //  TODO: add real ids to posts so that we can address them properly
  return api("posts/" + post_id, {}, "DELETE");
}
