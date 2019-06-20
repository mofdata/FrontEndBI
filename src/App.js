import React from "react";
import { Provider } from "react-redux";

import store from './store';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Provider store={store}>
    <div style={{height: 400}}>
      <Dashboard />
    </div>
    </Provider>
  );
}

export default App;
