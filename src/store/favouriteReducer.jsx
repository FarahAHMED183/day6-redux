import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./favouriteAction";

// favouriteReducer.jsx
const initialState = {
  favorites: [],
  loading:false,
  error:'',
  movies:[],  // Ensure favorites is initialized as an empty array
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

      case FETCH_MOVIES_REQUEST:
        return{
          ...state,loading:true
        }
        case FETCH_MOVIES_SUCCESS:
        return{
          ...state,loading:false,movies:action.payload,error:''
        }
        case FETCH_MOVIES_FAILURE:
        return{
          ...state,loading:false,movies:[],error:action.payload
        }
    default:
      return state;
  }
};

export default favouriteReducer;
