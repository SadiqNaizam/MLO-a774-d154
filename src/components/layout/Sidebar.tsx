import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom'; // For navigation links
import { LayoutDashboard, Settings, Users, FileText } from 'lucide-react'; // Example icons

interface SidebarProps {
  // Props can be added to customize items, e.g., based on user role
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  console.log("Rendering Sidebar");

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/profile", label: "Profile", icon: Users }, // Example sub-route
    { href: "/dashboard/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className={`w-64 h-screen bg-muted/40 border-r p-4 space-y-4 fixed top-16 left-0 hidden md:block ${className}`}>
      {/* Assuming header takes 16 units (h-16 or 4rem). Adjust 'top-16' if header height changes. */}
      {/* Or, if sidebar is part of a layout that handles header height, 'top-0' and adjust parent flex/grid. */}
      <ScrollArea className="h-[calc(100vh-5rem)] pr-2"> {/* Adjust height based on parent layout and header */}
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center py-2 px-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              // Add active link styling if needed, e.g., using useLocation from react-router-dom
            >
              <item.icon className="mr-3 h-5 w-5 text-muted-foreground" />
              {item.label}
            </Link>
          ))}
        </nav>
        <Separator className="my-4" />
        {/* Additional sections or components in the sidebar can be added here */}
        <div className="p-2 text-sm text-muted-foreground">
          {/* Placeholder for other sidebar content */}
          Workspace
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;