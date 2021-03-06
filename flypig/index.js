import React from "react";
import ReactDOM from "react-dom";

import Flypig from './src/pages/index.js'
import {Provider,} from 'react-redux';
import store from './src/store';
ReactDOM.render(
 <Provider store={store}>
    <Flypig />,
     </Provider>,
  document.getElementById("root")
);