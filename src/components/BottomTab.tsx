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
    <div className="border fixed bottom-2 left-1/2 -translate-x-1/2 rounded-full h-16 px-6 w-[90%] sm:w-fit max-sm:justify-between flex items-center bg-background/50 z-10 sm:gap-10 backdrop-blur-xs">
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
  );
};

export default BottomTab;
