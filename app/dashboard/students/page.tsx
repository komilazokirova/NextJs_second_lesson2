import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talabalar",
};

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Talabalar</h1>
      <ul className="mt-4 list-disc pl-6 space-y-1">
        <li>Aziz</li>
        <li>Madina</li>
        <li>Sardor</li>
      </ul>
    </div>
  );
}
