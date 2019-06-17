import {
  PostService,
  CollectionService,
  UserService
} from "@/common/api.service";
import {
  POSTS,
  CREATE_POST,
  RELATED_POSTS,
  UPLOAD_FEATURED_IMAGE,
  CHANGE_STATUS,
  CHANGE_ACCESSIBILITY,
  UPDATE,
  SHOW,
  BOOKMARK_POST,
  LIKE_POST,
  USER_POSTS,
  POST_RETRIEVE_USER_COLLECTION_ORIENTED,
  POST_RETRIEVE_COLLECTION_ORIENTED
} from "./actions.type";
import {
  SET_POSTS,
  SET_POST,
  SET_FEATURED_IMAGE,
  SET_STATUS,
  SET_ACCESSIBILITY
} from "./mutations.type";

const state = {
  post: {},
  posts: []
};

const getters = {
  post(state) {
    return state.post;
  },
  posts(state) {
    return state.posts;
  }
};

const actions = {
  [POSTS](context) {
    return PostService.index().then(({ data }) => {
      context.commit(SET_POSTS, data.data.data);
      return data;
    });
  },
  [CREATE_POST](context, payload) {
    return PostService.create(payload).then(({ data }) => {
      context.commit(SET_POST, data.data.data);
      return data;
    });
  },
  [RELATED_POSTS](context, { post, quantity }) {
    return PostService.relatedPosts(post, quantity).then(({ data }) => {
      context.commit(SET_POSTS, data.data.data);
      return data;
    });
  },
  [UPLOAD_FEATURED_IMAGE](context, { post, image }) {
    return PostService.uploadFeaturedImage(post, image).then(({ data }) => {
      context.commit(SET_FEATURED_IMAGE, data.data);
      return data;
    });
  },
  [CHANGE_STATUS](context, { post, status }) {
    return PostService.changeStatus(post, status).then(({ data }) => {
      context.commit(SET_STATUS, status);
      return data;
    });
  },
  [CHANGE_ACCESSIBILITY](context, { post, accessibility }) {
    return PostService.changeAccessibility(post, accessibility).then(
      ({ data }) => {
        context.commit(SET_ACCESSIBILITY, accessibility);
        return data;
      }
    );
  },
  [UPDATE](context, { post, params }) {
    return PostService.update(post, params).then(({ data }) => {
      context.commit(SET_POST, data.data);
      return data;
    });
  },
  [SHOW](context, payload) {
    return PostService.show(payload).then(({ data }) => {
      context.commit(SET_POST, data.data);
      return data;
    });
  },
  [BOOKMARK_POST](context, payload) {
    return PostService.bookmarkPost(payload).then(({ data }) => {
      return data;
    });
  },
  [LIKE_POST](context, payload) {
    return PostService.likePost(payload).then(({ data }) => {
      return data;
    });
  },
  [USER_POSTS](context) {
    return UserService.userPosts().then(({ data }) => {
      context.commit(SET_POSTS, data.data.data);
      return data;
    });
  },
  [POST_RETRIEVE_USER_COLLECTION_ORIENTED](context) {
    // eslint-disable-next-line prettier/prettier
    return UserService.postRetrieveUserCollectionsOriented().then(({ data }) => {
        context.commit(SET_POSTS, data.data.data);
        return data;
      }
    );
  },
  [POST_RETRIEVE_COLLECTION_ORIENTED](context, payload) {
    // eslint-disable-next-line prettier/prettier
    return CollectionService.postRetrieveCollectionOriented(payload).then(({ data }) => {
        context.commit(SET_POSTS, data.data.data);
        return data;
      }
    );
  }
};

const mutations = {
  [SET_POSTS](state, posts) {
    state.posts = posts;
  },
  [SET_POST](state, post) {
    state.post = post;
  },
  [SET_FEATURED_IMAGE](state, featuredImage) {
    state.post.featuredImage = featuredImage;
  },
  [SET_STATUS](state, status) {
    state.post.status = status;
  },
  [SET_ACCESSIBILITY](state, accessibility) {
    state.post.accessibility = accessibility;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
