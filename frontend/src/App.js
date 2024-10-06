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
const LazyPersonalCheck = lazy(()=>import('./Pages/PersonalCheck/PersonalCheck'));
const LazyIntro = lazy(() => import("./Pages/Intro/Intro"));
const LazyChatbot = lazy(() => import("./Pages/Chatbot/Chatbot"));
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
              <LazyIntro />
            </Suspense>
          }
        />
        <Route
          path="/home"
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
          path="/Personality_test"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyPersonalCheck />
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
         <Route
          path="/chatbot"
          element={
            <Suspense
              fallback={<div className="bg-black h-screen">Loading...</div>}
            >
              <LazyChatbot />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
