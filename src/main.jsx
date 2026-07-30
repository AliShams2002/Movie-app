import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import Provider from "./components/common/Provider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
);
