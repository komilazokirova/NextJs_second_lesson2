import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="rounded-lg border bg-gray-50 p-6 text-gray-700">
      <p className="text-base font-medium">
        Sozlamalar bo'limiga xush kelibsiz!
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Yuqoridagi tablardan birini tanlang:{" "}
        <Link
          href="/dashboard/settings/profile"
          className="font-medium text-blue-600 underline"
        >
          Profil sozlamalari
        </Link>{" "}
        yoki{" "}
        <Link
          href="/dashboard/settings/security"
          className="font-medium text-blue-600 underline"
        >
          Xavfsizlik sozlamalari
        </Link>
        .
      </p>
    </div>
  );
}
