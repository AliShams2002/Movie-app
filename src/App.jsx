import React from "react";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./layouts/Layout";
import Auth from "./pages/Auth";

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

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
