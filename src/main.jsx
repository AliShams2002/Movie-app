import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import AuthListener from "./components/auth/AuthListener";
import Provider from "./components/common/Provider";

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <AuthListener>
        <App />
      </AuthListener>
    </BrowserRouter>
  </Provider>,
);
