const initialState = "";

const searchWeb = (state = initialState, action) => {
  switch (action.type) {
    case "websearch":
      return action.payload;
    default:
      return state;
  }
};
export default searchWeb;
