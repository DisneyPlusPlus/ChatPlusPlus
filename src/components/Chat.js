import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getMessagesByUserId, unloadMessages } from '../actions/chat';

const errorClass = {
  backgroundColor: 'red',
  opacity: 0.75,
  borderRadius: 10,
  fontFamily: 'monospace',
  fontSize: 20,
  margin: '0 auto',
  width: '50vw',
  height: 30,
  padding: '5px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Chat = () => {
  const { id } = useParams();
  const { messages, error } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    getMessagesByUserId(dispatch, id);
    return () => unloadMessages(dispatch);
  }, [id, dispatch]);

  return (
    <>
      {error ? <span style={errorClass}>Unable to load messages</span> : null}
      {messages.map(({ date, message }) => (
        <div>
          {message}
          <span>{moment(date).fromNow()}</span>
        </div>
      ))}
    </>
  );
};

export default Chat;