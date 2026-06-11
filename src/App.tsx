import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoadingSkeletons from "./LoadingSkeletons";
import SEOHead from "./components/SEO/SEOHead";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Lazy load the Home component
const Home = lazy(() => import("./components/Home/Home"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSkeletons page={true} />}>
        <SpeedInsights />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <SEOHead />
                <Home />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <div className="flex items-center justify-center h-[50vh] text-2xl font-display text-muted-foreground">
                  404 - Strona nie znaleziona
                </div>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
