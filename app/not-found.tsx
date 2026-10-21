import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">404 — Sahifa topilmadi</h1>
      <p className="mt-2 text-gray-600">Siz qidirayotgan sahifa mavjud emas.</p>
      <Link href="/" className="mt-4 inline-block underline text-blue-600">
        ← Bosh sahifaga qaytish
      </Link>
    </main>
  );
}
