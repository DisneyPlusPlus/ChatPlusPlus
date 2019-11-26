import axios from 'axios';

export const GET_MESSAGES_BY_USER_ID_FETCH = Symbol.for('GET_MESSAGES_BY_USER_ID_FETCH');
export const GET_MESSAGES_BY_USER_ID_SUCCESS = Symbol.for('GET_MESSAGES_BY_USER_ID_SUCCESS');
export const GET_MESSAGES_BY_USER_ID_FAILURE = Symbol.for('GET_MESSAGES_BY_USER_ID_FAILURE');
export const UNLOAD_MESSAGES = Symbol.for('UNLOAD_MESSAGES');

// TODO: default this in the environment variables.
const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3333/api' : null;

export const getMessagesByUserId = async (dispatch, id) => {
  dispatch({ type: GET_MESSAGES_BY_USER_ID_FETCH });
  try {
    const response = await axios.get(`${URL}`); // TODO: Actual URL
    dispatch({
      type: GET_MESSAGES_BY_USER_ID_SUCCESS,
      payload: {
        messages: response.data.messages
      }
    });
  } catch (error) {
    // TODO: Log error to service
    dispatch({
      type: GET_MESSAGES_BY_USER_ID_FAILURE,
      payload: {
        error: error.message
      }
    });
  }
};

export const unloadMessages = dispatch => () => {
  dispatch({ type: UNLOAD_MESSAGES });
};