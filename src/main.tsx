import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RoutesProvider } from "./shared/config/routes/routes.provider.tsx";
import { Toaster } from "sonner";

import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesProvider />
    <Toaster />
  </StrictMode>
);
