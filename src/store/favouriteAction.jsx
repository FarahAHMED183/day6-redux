import axiosInstance from "./axiosInstance";

export const ADD_FAVORITE="ADD_FAVORITE";
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';





export const fetchMovie = () =>async (dispatch)=>{
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try{
    const response=await axiosInstance.get();
    dispatch({
      type:FETCH_MOVIES_SUCCESS,
      payload:response.data,
    });

  }
  catch(error){
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    
  }
}














export const addFavorite = (movie) => {
  return {
    type: 'ADD_FAVORITE',
    payload: movie,
  };
};

export const removeFavorite = (movie) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: movie,
  };
};
