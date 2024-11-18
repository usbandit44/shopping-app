import { createFileRoute } from "@tanstack/react-router";
import LikedPage from "@/pages/LikedPage";

export const Route = createFileRoute("/_buyer/liked/")({
  component: () => <LikedPage />,
});
