const initialState = {
  user: {
    email: "test@gmail.com",
    mdp: 123456,
    logged: false,
  },
  tache: [],
  // tache:{
  //     id:'',
  //     nom:'',
  //     description:''
  // }
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "LOG-IN": {
      return {
        ...state,
        user: {
          ...state.user,
          logged: true,
        },
      };
    }
    case "LOG-OUT": {
      return {
        ...state,
        user: {
          ...state.user,
          logged: false,
        },
      };
    }
    case "ADD_TACHE":
      return {
        ...state,
        tache: state.tache.concat(action.payload),
      };
    case "DELETE_TACHE": {
      return {
        ...state,
        tache: state.tache.filter((taches) => taches.id !== action.payload),
      };
    }
    case "UPDATE_TACHE": {
      return {
        ...state,
        tache: state.tache.map((taches, i) =>
          taches.id == action.payload.id
            ? {
                ...action.payload,
              }
            : taches
        ),
      };
    }
    default:
      return state;
  }
};
export default reducer;
