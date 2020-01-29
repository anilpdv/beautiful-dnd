import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
