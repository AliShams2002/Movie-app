import HomePage from "./pages/Home/index.jsx";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/Movie/index.jsx";
import Layout from "./layouts/Layout";
import Account from "./pages/Profile/index.jsx";
import Search from "./pages/Search/index.jsx";

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
          path={`/movie/:id`}
          element={
            <Layout>
              <MovieDetail />
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />

        <Route path="/profile" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
