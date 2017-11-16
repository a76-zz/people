import { init as websocketInit, emit } from '../actions/websocket';

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'


export default function initStore () {
  const middleware = [ thunkMiddleware.withExtraArgument({ emit }) ];
  
  middleware.push(createLogger());
  
  const setup = applyMiddleware(...middleware)(createStore);

  const store = setup(reducer);
  websocketInit(store); // setup websocket listeners etc

  return store;
}