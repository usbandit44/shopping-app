import ShopPage from "@/pages/ShopPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_seller/shop/")({
  component: () => <ShopPage />,
});
