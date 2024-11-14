import Header from "@/features/Root/Components/Header/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_application")({
  component: () => (
    <div className="w-screen min-h-screen">
      <Header />
      <Outlet />
    </div>
  ),
});
