import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

let counter = 1

const refresh = () => {
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App counter = {counter}/>
);
}
counter += 1
refresh()