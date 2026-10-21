import Navbar from "../components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="mt-10 border-t p-6 text-center text-sm">
        © 2026 IT Academy
      </footer>
    </>
  );
}