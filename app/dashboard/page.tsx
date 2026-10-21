export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Xush kelibsiz! Bu yerda umumiy ma'lumotlar bo'ladi.
      </p>

      {/* Statistika kartalari */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Talabalar</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">120</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Kurslar</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">8</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Guruhlar</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
        </div>
      </div>
    </div>
  );
}
