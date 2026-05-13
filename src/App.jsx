import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { store } from "./redux/store";
import "./App.css";

// Lazy load components for code splitting and performance optimization
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

/**
 * Loading Fallback Component
 */
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

/**
 * Footer Component
 */
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 ShoppyGlobe. All rights reserved.</p>
      <p>Made with ❤️ by ShoppyGlobe Team</p>
    </div>
  </footer>
);

/**
 * Root Layout Component
 */
const RootLayout = () => (
  <div className="app-layout">
    <Header />
    <main className="app-main">
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

// Create router with nested layout routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

/**
 * App Component - Main application entry point
 */
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;