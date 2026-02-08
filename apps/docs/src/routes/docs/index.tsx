import { createFileRoute, redirect } from "@tanstack/react-router";
import { previewRegistry } from "../../previews/registry";

const firstComponent = Object.keys(previewRegistry)[0];

export const Route = createFileRoute("/docs/")({
  beforeLoad: () => {
    throw redirect({
      to: "/docs/components/$component",
      params: { component: firstComponent },
    });
  },
});
