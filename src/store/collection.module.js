import { CollectionService, UserService } from "@/common/api.service";
import {
  COLLECTIONS,
  USER_COLLECTIONS,
  CREATE_COLLECTION,
  DESTROY_COLLECTION,
  FOLLOW_COLLECTION
} from "./actions.type";
import { SET_COLLECTION, SET_COLLECTIONS } from "./mutations.type";

const state = {
  collection: {},
  collections: []
};

const getters = {
  collection(state) {
    return state.collection;
  },
  collections(state) {
    return state.collections;
  }
};

const actions = {
  [COLLECTIONS](context) {
    return CollectionService.index().then(({ data }) => {
      context.commit(SET_COLLECTIONS, data.data);
      return data;
    });
  },
  [USER_COLLECTIONS](context) {
    return UserService.userCollections().then(({ data }) => {
      context.commit(SET_COLLECTIONS, data.data);
      return data;
    });
  },
  [CREATE_COLLECTION](context, payload) {
    return CollectionService.create(payload).then(({ data }) => {
      context.commit(SET_COLLECTION, data.data);
      return data;
    });
  },
  [DESTROY_COLLECTION](context, payload) {
    return CollectionService.destroy(payload).then(({ data }) => {
      return data;
    });
  },
  [FOLLOW_COLLECTION](context, payload) {
    return CollectionService.followCollection(payload).then(({ data }) => {
      return data;
    });
  }
};

const mutations = {
  [SET_COLLECTION](state, collection) {
    state.collection = collection;
  },
  [SET_COLLECTIONS](state, collections) {
    state.collections = collections;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
