import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import Budget from "./components/dashboard/Budget";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Dashboard />
        <Budget />
      </div>
    </Provider>
  );
}

export default App;
