import { useEffect, useState } from "react";

type Framework = "react" | "vue" | "angular";

const VALID_FRAMEWORKS: Framework[] = ["react", "vue", "angular"];

export function useFrameworkSelection() {
  const [selectedFramework, setSelectedFrameworkState] =
    useState<Framework>("react");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const params = new URLSearchParams(window.location.search);
    const urlFramework = params.get("framework") as Framework | null;

    if (urlFramework && VALID_FRAMEWORKS.includes(urlFramework)) {
      setSelectedFrameworkState(urlFramework);
      localStorage.setItem("versaur_framework", urlFramework);
    } else {
      const storedFramework = localStorage.getItem(
        "versaur_framework",
      ) as Framework | null;
      if (storedFramework && VALID_FRAMEWORKS.includes(storedFramework)) {
        setSelectedFrameworkState(storedFramework);
      }
    }
  }, []);

  const setFramework = (framework: Framework) => {
    setSelectedFrameworkState(framework);
    localStorage.setItem("versaur_framework", framework);

    const params = new URLSearchParams(window.location.search);
    params.set("framework", framework);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  };

  return { selectedFramework, setFramework, isClient };
}
