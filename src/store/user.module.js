import { UserService } from "@/common/api.service";
import {
  GET_USER,
  REGISTER,
  FOLLOW,
  USER_FOLLOWERS,
  USER_FOLLOWING
} from "./actions.type";
import {
  SET_USER,
  SET_USER_FOLLOWINGS,
  SET_USER_FOLLOWERS
} from "./mutations.type";

const state = {
  user: {},
  userFollowers: [],
  userFollowings: []
};

const getters = {
  user(state) {
    return state.user;
  },
  userFollowers(state) {
    return state.userFollowers;
  },
  userFollowings(state) {
    return state.userFollowings;
  }
};

const actions = {
  [GET_USER](context, payload) {
    return UserService.index(payload).then(({ data }) => {
      context.commit(SET_USER, data);
      return data;
    });
  },
  [REGISTER](context, payload) {
    return UserService.register(payload).then(({ data }) => {
      context.commit(SET_USER, data);
      return data;
    });
  },
  [FOLLOW](context, payload) {
    return UserService.follow(payload).then(({ data }) => {
      return data;
    });
  },
  [USER_FOLLOWERS](context) {
    return UserService.followers().then(({ data }) => {
      context.commit(SET_USER_FOLLOWERS, data);
      return data;
    });
  },
  [USER_FOLLOWING](context) {
    return UserService.following().then(({ data }) => {
      context.commit(SET_USER_FOLLOWINGS, data);
      return data;
    });
  }
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_USER_FOLLOWERS](state, users) {
    state.userFollowers = users;
  },
  [SET_USER_FOLLOWINGS](state, users) {
    state.userFollowings = users;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
