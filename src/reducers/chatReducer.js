import {
  GET_MESSAGES_BY_USER_ID_FETCH,
  GET_MESSAGES_BY_USER_ID_SUCCESS,
  GET_MESSAGES_BY_USER_ID_FAILURE,
  UNLOAD_MESSAGES,
} from '../actions/chat';

const initialState = {
  messagesLoading: false,
  messages: [],
  error: null,
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_MESSAGES_BY_USER_ID_FETCH:
      return {
        ...state,
        messagesLoading: true,
        error: null,
      };
    case GET_MESSAGES_BY_USER_ID_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        error: null,
        messages: payload.messages,
      };
    case GET_MESSAGES_BY_USER_ID_FAILURE:
      return {
        ...state,
        messagesLoading: false,
        error: payload.error,
      };
    case UNLOAD_MESSAGES:
      return {
        ...state,
        messages: [],
        messagesLoading: false,
        error: null,
      };
    default:
      return state;
  }
};