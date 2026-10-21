import type { Metadata } from "next";
import SettingsTabs from "./SettingsTabs";

export const metadata: Metadata = {
  title: "Sozlamalar",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Sozlamalar</h1>
        <p className="mt-1 text-sm text-gray-500">
          Profil va xavfsizlik sozlamalarini boshqaring.
        </p>
      </div>

      {/* Tepada 2 ta Tab ("Profil" va "Xavfsizlik") */}
      <SettingsTabs />

      {/* Tanlangan tab kontenti */}
      <div>{children}</div>
    </div>
  );
}
