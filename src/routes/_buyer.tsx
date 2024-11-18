import Header from '@/features/Root/Components/Header/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_buyer')({
  component: () => (
    <div className="w-screen min-h-screen">
      <Header />
      <Outlet />
    </div>
  ),
})
