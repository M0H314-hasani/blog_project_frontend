import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, LOGOUT, REFRESH_TOKEN, CHECK_AUTH } from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  token: null,
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data.access_token);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
        });
    });
  },

  [LOGOUT](context) {
    return new Promise(resolve => {
      ApiService.post("auth/logout")
        .then(({ data }) => {
          context.commit(PURGE_AUTH);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
        });
    });
  },

  [REFRESH_TOKEN](context) {
    return new Promise(resolve => {
      ApiService.post("auth/refresh")
        .then(({ data }) => {
          context.commit(SET_AUTH, data.access_token);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
        });
    });
  },

  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("auth/token")
        .then(({ data }) => {
          context.commit(SET_AUTH, data.access_token);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
        });
    } else {
      context.commit(PURGE_AUTH);
      ApiService.setHeader();
    }
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, token) {
    state.isAuthenticated = true;
    state.token = token;
    state.errors = {};
    JwtService.saveToken(state.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.token = null;
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
