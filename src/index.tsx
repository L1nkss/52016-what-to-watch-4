import {Provider} from 'react-redux';
import App from "@components/app/app.connect";
import * as React from "react"
import * as ReactDOM from 'react-dom';
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
