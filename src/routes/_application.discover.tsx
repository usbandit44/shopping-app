import DiscoverPage from "@/pages/DiscoverPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_application/discover")({
  component: () => <DiscoverPage />,
});
