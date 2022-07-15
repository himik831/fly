import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Tickets from "./components/tickets/Tickets";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<div>Not implemented</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
