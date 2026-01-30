import "./LayoutHeader.css";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Drawer, Button, MenuProps } from "antd";
import {
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  AppstoreOutlined,
  StarOutlined,
  ShopOutlined,
  CarOutlined,
  PhoneOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import LOGO_ICON from "@assets/nk_logo.png";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Collections",
    key: "collections",
    icon: <AppstoreOutlined />,
  },

  {
    label: "Popular Picks",
    key: "popularpicks",
    icon: <StarOutlined />,
    // children: [
    //   {
    //     label: "News",
    //     key: "news",
    //   },
    //   {
    //     label: "Blog",
    //     key: "blog",
    //   },
    // ],
  },
  { label: "Dealership", key: "dealership", icon: <ShopOutlined /> },
  { label: "Car Rent", key: "carrent", icon: <CarOutlined /> },
  {
    label: "Business",
    key: "business",
    icon: <SolutionOutlined />,
  },
  { label: "Contact", key: "contact", icon: <PhoneOutlined /> },
  { label: "Profile", key: "profile", icon: <TeamOutlined /> },
];

const LayoutHeader: FC = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    // routing logic
    if (e.key === "aboutus") return navigate("/aboutus");
    if (e.key === "home") return navigate("/home");
    if (e.key === "contact") return navigate("/contact");
    if (e.key === "profile") return navigate("/profile");
    if (e.key === "carrent") return navigate("/carrent");
    if (e.key === "dealership") return navigate("/dealership");
    if (e.key === "news") return navigate("/news");
    if (e.key === "business-development")
      return navigate("/business-development");
    if (e.key === "blog") return navigate("/comingsoon");
    // default
    navigate("/comingsoon");
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Mobile top bar (shows logo + hamburger) */}
      <div className="cognisp-mobile-topbar flex items-center justify-between bg-blue-600 px-3 py-2 text-white md:hidden">
        <a href="/" className="flex items-center gap-2">
          <img src={LOGO_ICON} alt="Logo" className="h-12 w-12" />
          <span className="font-bold">NK-Furniture</span>
        </a>
        <Button
          type="text"
          className="text-white"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      {/* Desktop sidebar */}
      <aside
        className={`cognisp-sidebar-container mt-[5px] hidden flex-col bg-blue-600 text-white transition-all duration-200 md:flex ${
          collapsed ? "w-18" : "w-64"
        }`}
        style={{ minHeight: 0 }}
      >
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <img
              src={LOGO_ICON}
              alt="logo"
              className={`h-12 w-12 ${collapsed ? "mx-auto" : ""}`}
            />
            {!collapsed && <span className="font-bold">NK-Furniture</span>}
          </div>
          <Button
            type="text"
            className="text-white"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed((s) => !s)}
          />
        </div>

        <div className="flex-1 overflow-auto">
          <Menu
            onClick={onClick}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            theme="dark"
            className="cognisp-sidebar-menu border-none bg-blue-600 text-white"
          />
        </div>
      </aside>

      {/* Drawer for mobile */}
      <Drawer
        className="cognisp-drawer"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <img src={LOGO_ICON} alt="logo" className="h-12 w-12" />
            <span className="font-bold">NK-Furniture</span>
          </div>
          <Button
            type="text"
            className="text-white"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </Button>
        </div>
        <Menu
          onClick={onClick}
          mode="inline"
          items={items}
          className="cognisp-sidebar-menu h-full bg-blue-600 text-white "
        />
      </Drawer>
    </>
  );
};

export default LayoutHeader;
