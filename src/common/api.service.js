import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${JwtService.getToken()}`;

    Vue.axios.defaults.headers.common["Content-Type"] = `application/json`;

    Vue.axios.defaults.headers.common["Accept"] = `application/json`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  patch(resource, params) {
    return Vue.axios.patch(`${resource}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;

// Api services.

export const UserService = {
  index(user) {
    return ApiService.get(`user/${user}/index`);
  },
  register(params) {
    return ApiService.post(`user/register`, params);
  },
  updateUserInfo(params) {
    return ApiService.patch(`user`, params);
  },
  uploadAvatar(params) {
    return ApiService.post(`user/avatar/upload`, params);
  },
  bookmarkedPosts() {
    return ApiService.get(`user/post/bookmarks`);
  },
  likedPosts() {
    return ApiService.get(`user/post/likes`);
  },
  followedCollections() {
    return ApiService.get(`user/collections/followed`);
  },
  postRetrieveUserCollectionsOriented() {
    return ApiService.get(`user/collections/followed/posts`);
  },
  userCollections() {
    return ApiService.get(`user/collections`);
  },
  userPosts() {
    return ApiService.get(`user/posts`);
  },
  follow(user) {
    return ApiService.get(`user/${user}/follow`);
  },
  followers(user) {
    return ApiService.get(`user/${user}/followers`);
  },
  following(user) {
    return ApiService.get(`user/${user}/following`);
  }
};

export const CollectionService = {
  index() {
    return ApiService.get(`collection`);
  },
  create(params) {
    return ApiService.post(`collection`, params);
  },
  destroy(collection) {
    return ApiService.delete(`collection/${collection}`);
  },
  postRetrieveCollectionOriented(collection) {
    return ApiService.get(`collection/${collection}/posts`);
  },
  followCollection(collection) {
    return ApiService.get(`collection/${collection}/follow`);
  }
};

export const PostService = {
  index() {
    return ApiService.get(`post`);
  },
  create(params) {
    return ApiService.post(`post`, params);
  },
  relatedPosts(post, quantity) {
    return ApiService.get(`post/${post}/related/${quantity}`);
  },
  uploadFeaturedImage(post, params) {
    return ApiService.post(`post/${post}/featured-image/upload`, params);
  },
  changeStatus(post, params) {
    return ApiService.patch(`post/${post}/status`, params);
  },
  changeAccessibility(post, params) {
    return ApiService.patch(`post/${post}/accessibility`, params);
  },
  update(post, params) {
    return ApiService.patch(`post/${post}`, params);
  },
  show(post) {
    return ApiService.get(`post/${post}`);
  },
  bookmarkPost(post) {
    return ApiService.get(`post/${post}/bookmark`);
  },
  likePost(post) {
    return ApiService.get(`post/${post}/like`);
  }
};
