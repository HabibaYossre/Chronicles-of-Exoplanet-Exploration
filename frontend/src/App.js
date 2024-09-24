import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const LazyCardsManger = lazy(() => import("./Pages/Cards/CardsManger"));
const LazyPageNotFound = lazy(() =>
  import("./Pages/PageNotFound/PageNotFound")
);
const LazyHome = lazy(() => import("./Pages/Home/Home"));
const LazyThankYou = lazy(() => import("./Pages/ThankYou/ThankYou"));
const LazyPlanetInfo = lazy(() => import("./Pages/PlanetInfo/PlanetInfo"));
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
          path="/thank_you"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyThankYou />
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
        <Route
          path="/cards/:planetName"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyPlanetInfo />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
