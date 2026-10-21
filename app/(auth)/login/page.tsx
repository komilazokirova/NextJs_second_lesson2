import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kirish",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Tizimga kirish</h1>
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
        Kirish
      </button>

      <p className="mt-2 text-center text-sm text-gray-600">
        Hisobingiz yo'qmi?{" "}
        <Link href="/register" className="text-blue-600 underline">
          Ro'yxatdan o'ting
        </Link>
      </p>
    </div>
  );
}
