import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  ClipboardList,
  Settings, 
  ChevronRight
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, title, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      isActive 
        ? "bg-purple-100 text-purple-900 font-medium" 
        : "text-gray-600 hover:bg-gray-100"
    )}
  >
    {icon}
    <span>{title}</span>
    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const routes = [
    {
      icon: <LayoutDashboard className="h-4 w-4" />,
      title: "Dashboard",
      href: "/admin",
    },
    {
      icon: <Package className="h-4 w-4" />,
      title: "Products",
      href: "/admin/products",
    },
    {
      icon: <ClipboardList className="h-4 w-4" />,
      title: "Orders",
      href: "/admin/orders",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      title: "Settings",
      href: "/admin/settings",
    },
  ];

  return (
    <aside className="w-64 hidden md:block border-r min-h-screen p-4 bg-white">
      <div className="space-y-1">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            title={route.title}
            href={route.href}
            isActive={
              route.href === "/admin" 
                ? pathname === "/admin" 
                : pathname.startsWith(route.href)
            }
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
