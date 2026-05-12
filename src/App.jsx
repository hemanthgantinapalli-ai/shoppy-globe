import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
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
const RootLayout = ({ children }) => (
  <div className="app-layout">
    <Header />
    <main className="app-main">
      {children}
    </main>
    <Footer />
  </div>
);

// Create router with dynamic routes
const router = createBrowserRouter([
  {
    element: (
      <RootLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Home />
        </Suspense>
      </RootLayout>
    ),
    path: "/",
  },
  {
    element: (
      <RootLayout>
        <Suspense fallback={<LoadingFallback />}>
          <ProductDetail />
        </Suspense>
      </RootLayout>
    ),
    path: "/product/:id",
  },
  {
    element: (
      <RootLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Cart />
        </Suspense>
      </RootLayout>
    ),
    path: "/cart",
  },
  {
    element: (
      <RootLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Checkout />
        </Suspense>
      </RootLayout>
    ),
    path: "/checkout",
  },
  {
    element: (
      <RootLayout>
        <Suspense fallback={<LoadingFallback />}>
          <NotFound />
        </Suspense>
      </RootLayout>
    ),
    path: "*",
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