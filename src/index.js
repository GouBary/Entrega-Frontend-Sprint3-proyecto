import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from "./routers/AppRouters";
import { Provider } from "react-redux";
import { store } from "./redux/store/store"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <AppRouters />
  </Provider>

);


