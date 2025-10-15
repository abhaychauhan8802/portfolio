"use client";

import { TAB_ICON_SIZE } from "@/constants";
import { cn } from "@/lib/utils";
import { FolderOpen, House, PhoneCall, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const tabItems: TabItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <House size={TAB_ICON_SIZE} />,
  },
  {
    name: "About Me",
    href: "/about",
    icon: <UserRound size={TAB_ICON_SIZE} />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FolderOpen size={TAB_ICON_SIZE} />,
  },
  {
    name: "Contact Me",
    href: "/contact",
    icon: <PhoneCall size={TAB_ICON_SIZE} />,
  },
];

const BottomTab = () => {
  const pathname = usePathname();

  return (
    <div className="border-t fixed bottom-0 rounded-t-lg shadow-up-md h-16 px-6 w-full flex items-center bg-background z-10">
      <div className="max-w-6xl w-full mx-auto flex justify-between sm:justify-evenly">
        {tabItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={cn(
                "flex flex-col items-center gap-1",
                pathname === item.href && "text-primary"
              )}
            >
              {item.icon}
              <span
                className={cn(
                  "text-xs",
                  pathname === item.href ? "font-semibold" : "font-medium"
                )}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomTab;
