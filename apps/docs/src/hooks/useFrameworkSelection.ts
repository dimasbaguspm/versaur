"use client";

import { useEffect, useState } from "react";

type Framework = "react" | "vue" | "angular";

export function useFrameworkSelection() {
  const [selectedFramework, setSelectedFrameworkState] =
    useState<Framework>("react");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Read URL param first
    const params = new URLSearchParams(window.location.search);
    const urlFramework = params.get("framework") as Framework | null;

    if (urlFramework && ["react", "vue", "angular"].includes(urlFramework)) {
      setSelectedFrameworkState(urlFramework);
      localStorage.setItem("versaur_framework", urlFramework);
    } else {
      // Fall back to localStorage
      const storedFramework = localStorage.getItem(
        "versaur_framework",
      ) as Framework | null;
      if (
        storedFramework &&
        ["react", "vue", "angular"].includes(storedFramework)
      ) {
        setSelectedFrameworkState(storedFramework);
      }
    }
  }, []);

  const setFramework = (framework: Framework) => {
    setSelectedFrameworkState(framework);
    localStorage.setItem("versaur_framework", framework);

    // Update URL param
    const params = new URLSearchParams(window.location.search);
    params.set("framework", framework);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  };

  return { selectedFramework, setFramework, isClient };
}
