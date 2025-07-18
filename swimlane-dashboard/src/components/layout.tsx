import "../app/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 bg-[#F4F5F7] overflow-auto min-h-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
