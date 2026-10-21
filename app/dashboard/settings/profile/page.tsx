import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil sozlamalari",
};

export default function ProfileSettingsPage() {
  return (
    <div className="space-y-4 max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">Profil sozlamalari</h2>
      <p className="text-sm text-gray-500">
        Bu yerda shaxsiy ma'lumotlaringizni tahrirlashingiz mumkin.
      </p>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ism</label>
          <input
            type="text"
            defaultValue="Azizbek"
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            rows={3}
            defaultValue="Next.js va React dasturchisi"
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <button
          type="button"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Saqlash
        </button>
      </div>
    </div>
  );
}
