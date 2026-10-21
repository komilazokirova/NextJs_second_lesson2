import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurslar",
};

export default function DashboardCoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Kurslar</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>JavaScript asoslari</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    </div>
  );
}