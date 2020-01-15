import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { submitReducer } from "./reducers/submitReducer";
import { userReducer } from "./reducers/userReducer";
import { saveOrSubmitReducer } from "./reducers/saveOrSubmitReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(
  //submitReducer,
  // userReducer,
  saveOrSubmitReducer
);

const store = createStore(
  saveOrSubmitReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: { primary: { main: "#005337" } },
  background: "#EFEFEF",
  spacing: 2
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
