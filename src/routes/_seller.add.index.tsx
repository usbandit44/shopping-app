import AddPage from "@/pages/AddPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_seller/add/")({
  component: () => <AddPage />,
});
