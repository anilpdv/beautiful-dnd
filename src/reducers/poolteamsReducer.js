const initialState = { teams: [], pools: {} };

export default function poolteamsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POOLTEAMS":
      return {
        ...state,
        teams: action.payload
      };
    case "CREATE_POOL_GENERATION":
      return {
        ...state,
        pools: action.payload
      };
    default:
      return state;
  }
}
