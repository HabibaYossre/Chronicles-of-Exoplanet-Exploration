import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const LazyCardsManger = lazy(() => import("./Pages/Cards/CardsManger"));
const LazyPageNotFound = lazy(() =>
  import("./Pages/PageNotFound/PageNotFound")
);
const LazyHome = lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyPageNotFound />
            </Suspense>
          }
        />
        <Route
          path="/cards"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyCardsManger />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
