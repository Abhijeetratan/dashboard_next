// app/layout.tsx
import SideNav from '@/app/ui/dashboard/sidenav';
import './globals.css'; // Relative import instead of alias

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}