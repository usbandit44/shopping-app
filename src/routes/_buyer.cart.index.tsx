import CartPage from "@/pages/CartPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_buyer/cart/")({
  component: () => <CartPage />,
});
