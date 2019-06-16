import { UserService } from "@/common/api.service";
import {
  GET_CURRENT_USER,
  UPDATE_USER_INFO,
  UPLOAD_AVATAR,
  BOOKMARKED_POSTS,
  LIKED_POSTS,
  FOLLOWED_COLLECTIONS,
  FOLLOWERS,
  FOLLOWING
} from "./actions.type";
import {
  SET_CURRENT_USER,
  SET_AVATAR,
  SET_LIKED_POSTS,
  SET_BOOKMARKED_POSTS,
  SET_FOLLOWERS,
  SET_FOLLOWINGS,
  SET_FOLLOWED_COLLECTIONS
} from "./mutations.type";

const state = {
  currentUser: {},
  likedPosts: [],
  bookmarkedPosts: [],
  followers: [],
  followings: [],
  followed_collections: []
};

const getters = {
  currentUser(state) {
    return state.currentUser;
  },
  likedPosts(state) {
    return state.likedPosts;
  },
  bookmarkedPosts(state) {
    return state.bookmarkedPosts;
  },
  followers(state) {
    return state.followers;
  },
  followings(state) {
    return state.followings;
  },
  followed_collections(state) {
    return state.followed_collections;
  }
};

const actions = {
  [GET_CURRENT_USER](context, payload) {
    return UserService.index(payload).then(({ data }) => {
      context.commit(SET_CURRENT_USER, data);
      return data;
    });
  },
  [UPDATE_USER_INFO](context, payload) {
    return UserService.updateUserInfo(payload).then(({ data }) => {
      context.commit(SET_CURRENT_USER, data);
      return data;
    });
  },
  [UPLOAD_AVATAR](context, payload) {
    return UserService.uploadAvatar(payload).then(({ data }) => {
      context.commit(SET_AVATAR, data);
      return data;
    });
  },
  [BOOKMARKED_POSTS](context) {
    return UserService.bookmarkedPosts().then(({ data }) => {
      context.commit(SET_BOOKMARKED_POSTS, data);
      return data;
    });
  },
  [LIKED_POSTS](context) {
    return UserService.likedPosts().then(({ data }) => {
      context.commit(SET_LIKED_POSTS, data);
      return data;
    });
  },
  [FOLLOWED_COLLECTIONS](context) {
    return UserService.followedCollections().then(({ data }) => {
      context.commit(SET_FOLLOWED_COLLECTIONS, data);
      return data;
    });
  },
  [FOLLOWERS](context) {
    return UserService.followers().then(({ data }) => {
      context.commit(SET_FOLLOWERS, data);
      return data;
    });
  },
  [FOLLOWING](context) {
    return UserService.following().then(({ data }) => {
      context.commit(SET_FOLLOWINGS, data);
      return data;
    });
  }
};

const mutations = {
  [SET_CURRENT_USER](state, user) {
    state.currentUser = user;
  },
  [SET_AVATAR](state, avatar) {
    state.user.avatar = avatar;
  },
  [SET_LIKED_POSTS](state, posts) {
    state.likedPosts = posts;
  },
  [SET_BOOKMARKED_POSTS](state, posts) {
    state.bookmarkedPosts = posts;
  },
  [SET_FOLLOWERS](state, users) {
    state.followers = users;
  },
  [SET_FOLLOWINGS](state, users) {
    state.followings = users;
  },
  [SET_FOLLOWED_COLLECTIONS](state, collections) {
    state.followed_collections = collections;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
