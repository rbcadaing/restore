// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../src/app/layout/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { router } from "./app/router/Routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore.ts";



ReactDOM.createRoot(document.getElementById("root")!).render(
  // Conmmented to prevent calling api 2x in development mode
  // <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  // </React.StrictMode>
);
