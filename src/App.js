import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import('./pages/Home'));
const Main = React.lazy(() => import('./pages/Main'));
const SuccessPage = React.lazy(() => import('./pages/SuccessPage'));


function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Suspense fallback={<div className="text-center text-white text-4xl font-bold"> Loading..... </div>}>
        <Routes>
          <Route path="" element={<Home/>}> </Route>
          <Route path="forms" element={<Main/>}></Route>
          <Route path="dataSubmitSuccess" element={<SuccessPage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
