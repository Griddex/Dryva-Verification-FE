import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { saveOrSubmitReducer } from "./reducers/saveOrSubmitReducer";
import { rolesReducer } from "./reducers/rolesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import history from "./services/historyService";
import httpLoginOrRegister from "./services/httpService/httpLogin";
import httpOthers from "./services/httpService/httpOthers";

const rootReducer = combineReducers({
  userReducer,
  saveOrSubmitReducer,
  rolesReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ httpLoginOrRegister, httpOthers })
    )
  )
);

const theme = createMuiTheme({
  palette: { primary: { main: "#6192A6" } },
  background: "#EFEFEF",
  spacing: 2
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
