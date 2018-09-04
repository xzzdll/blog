const currentTags = {
  state: {
    currentTag: null
  },
  mutations: {
    changeCurrentTag: (state, tag) => {
      state.currentTag = tag;
    }
  }
};

export default currentTags;
