import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;
