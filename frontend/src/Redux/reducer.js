import * as types from "./actionTypes";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_BLOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        blogs: payload,
        isError: false,
      };
    case types.GET_DATA_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        blogs: [],
      };
    case types.ADD_DATA_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_DATA_BLOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.ADD_DATA_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case types.DELETE_DATA_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_DATA_BLOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_DATA_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_DATA_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_DATA_BLOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_DATA_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};