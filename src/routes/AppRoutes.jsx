import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { lazy, Suspense } from "react";
import Spinner from "../components/common/Spinner";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));
const Search = lazy(() => import("../pages/Search"));
const Login = lazy(() => import("../pages/Login"));
const Account = lazy(() => import("../pages/Account"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={`/movie/:id`} element={<Detail type="movie" />} />
          <Route path={`/tv/:id`} element={<Detail type="tv" />} />
          <Route path={`/search`} element={<Search />} />
        </Route>

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="account" element={<Account />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
