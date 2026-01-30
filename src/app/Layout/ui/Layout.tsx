import { FC } from "react";
import { LayoutFooter, LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main area: sidebar (left) + content (right) */}
      <div className="flex flex-1">
        {/* Sidebar (LayoutHeader now renders a left sidebar) */}
        <LayoutHeader />

        {/* Main Content */}
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>

      {/* Footer - keeps bottom gap naturally */}
      <LayoutFooter />
    </div>
  );
};

export default Layout;