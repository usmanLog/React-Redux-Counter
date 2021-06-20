import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const increment = () => {
  return {
    type: 'increment'
  }
}

const decrement = () => {
  return {
    type: 'decrement'
  }
}

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
        store={store}
        increment={increment}
        decrement={decrement} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);



