import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RoutesProvider } from "./shared/config/routes/routes.provider.tsx";

import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesProvider />
  </StrictMode>
);
