import { LOAD_FLASH_MESSAGE } from "./actions.type";
import { SET_FLUSH_MESSAGE } from "./mutations.type";

const state = {
  flushMessage: null
};

const getters = {
  flushMessage(state) {
    return state.flushMessage;
  }
};

const actions = {
  [LOAD_FLASH_MESSAGE](context, payload) {
    context.commit(SET_FLUSH_MESSAGE, payload);
  }
};

const mutations = {
  [SET_FLUSH_MESSAGE](state, message) {
    state.flushMessage = message;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
