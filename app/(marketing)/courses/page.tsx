import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurslar",
};

export default function CoursesPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Kurslarimiz</h1>
      <ul className="mt-4 list-disc pl-6 space-y-1">
        <li>JavaScript asoslari</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    </main>
  );
}
