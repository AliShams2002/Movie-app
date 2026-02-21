import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./layouts/Layout";
import Account from "./pages/Accuont";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route
          path="/movie/test"
          element={
            <Layout>
              <MovieDetail />
            </Layout>
          }
        />

        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
