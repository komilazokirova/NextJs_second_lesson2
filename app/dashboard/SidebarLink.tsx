"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function SidebarLink({ href, children }: SidebarLinkProps) {
  const pathname = usePathname();
  // Aniq moslik yoki ichki sahifalar uchun (masalan /dashboard/settings/profile)
  const isActive =
    pathname === href || (href !== "/dashboard" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-blue-600 ${
        isActive ? "font-bold text-blue-600" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
