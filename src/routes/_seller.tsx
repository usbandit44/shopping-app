import SellerHeader from "@/features/Root/Components/SellerHeader/SellerHeader";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_seller")({
  component: () => (
    <div className="w-screen min-h-screen">
      <SellerHeader />
      <Outlet />
    </div>
  ),
});
