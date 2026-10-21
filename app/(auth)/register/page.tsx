import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Ro'yxatdan o'tish</h1>
      <input
        className="rounded border p-2"
        type="text"
        placeholder="Ismingiz"
      />
      <input
        className="rounded border p-2"
        type="email"
        placeholder="Email"
      />
      <input
        className="rounded border p-2"
        type="password"
        placeholder="Parol"
      />
      <button
        className="rounded bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
        type="button"
      >
        Ro'yxatdan o'tish
      </button>

      <p className="mt-2 text-center text-sm text-gray-600">
        Hisobingiz bormi?{" "}
        <Link href="/login" className="text-blue-600 underline">
          Kiring
        </Link>
      </p>
    </div>
  );
}
