import type { Metadata } from "next";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="flex w-56 flex-col justify-between border-r p-4">
        <div>
          <h2 className="mb-4 text-lg font-bold">Dashboard</h2>
          <nav className="flex flex-col gap-2">
            <SidebarLink href="/dashboard">Umumiy</SidebarLink>
            <SidebarLink href="/dashboard/students">Talabalar</SidebarLink>
            <SidebarLink href="/dashboard/courses">Kurslar</SidebarLink>
            <SidebarLink href="/dashboard/settings">Sozlamalar</SidebarLink>
          </nav>
        </div>

        <div className="space-y-2 border-t pt-4">
          <Link href="/" className="block text-sm text-gray-600 hover:text-black">
            ← Saytga qaytish
          </Link>
          <Link
            href="/login"
            className="block text-sm font-medium text-red-600 hover:underline"
          >
            Chiqish
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6">{children}</section>
    </div>
  );
}
