import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xavfsizlik sozlamalari",
};

export default function SecuritySettingsPage() {
  return (
    <div className="space-y-4 max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">Xavfsizlik sozlamalari</h2>
      <p className="text-sm text-gray-500">
        Parol va hisob xavfsizligini ta'minlang.
      </p>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Eski parol
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Yangi parol
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <button
          type="button"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Parolni yangilash
        </button>
      </div>
    </div>
  );
}
