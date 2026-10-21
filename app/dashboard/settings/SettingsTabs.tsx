"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsTabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "Profil", href: "/dashboard/settings/profile" },
    { name: "Xavfsizlik", href: "/dashboard/settings/security" },
  ];

  return (
    <div className="flex gap-6 border-b">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`pb-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-600"
                : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
