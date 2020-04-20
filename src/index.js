import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {store, persistor} from './store'
import {PersistGate} from "redux-persist/integration/react";
// components
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>, document.querySelector("#root")
);