import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PreviewRenderer } from "./preview-renderer";

import "@versaur/core/tokens";
import "./preview.css";

createRoot(document.getElementById("preview-root")!).render(
  <StrictMode>
    <PreviewRenderer />
  </StrictMode>,
);
