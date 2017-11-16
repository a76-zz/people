import io from 'socket.io-client';
import { messages, uri } from 'people-config';
const socket = io(uri);

const init = (store) => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(messages)
    .forEach(key => {
      const type = messages[key]; 
      socket.on(type, (payload) => store.dispatch({ type, payload }));
    });
};

const emit = (type, payload) => socket.emit(type, payload);

export {
  init,
  emit
};