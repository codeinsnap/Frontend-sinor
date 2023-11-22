import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import FlashPage from "./component/flashPage/FlashPage";
import store from "./Redux/store";
import { Provider } from "react-redux"

const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={FlashPage()}>
          <LazyApp />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
