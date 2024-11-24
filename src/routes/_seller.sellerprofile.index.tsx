import SellerProfilePage from "@/pages/SellerProfilePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_seller/sellerprofile/")({
  component: () => <SellerProfilePage />,
});
