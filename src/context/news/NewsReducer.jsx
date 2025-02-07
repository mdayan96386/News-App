const NewsReducer = (state, action) => {
  switch (action.type) {
    
    case "GET_NEWS":
      return {
        ...state,
        allNews: action.payload,
      };

      case "CHANGE_THEME":
        return {
          ...state,
          theme : state.theme ? false : true, 
        }

    default:
      return state;
  }
};

export default NewsReducer;
