import { createFileRoute } from "@tanstack/react-router";
import DiscoverPage from "@/pages/DiscoverPage";

export const Route = createFileRoute("/_buyer/discover/")({
  component: () => <DiscoverPage />,
});
