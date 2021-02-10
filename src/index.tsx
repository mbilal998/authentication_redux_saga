import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import { configureStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const config = configureStore();

ReactDOM.render(
  <Provider store={config.store}>
    <PersistGate loading={null} persistor={config.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
