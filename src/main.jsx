import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

// AOSInitializer component
function AOSInitializer({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AOSInitializer>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AOSInitializer>
  </StrictMode>
);
