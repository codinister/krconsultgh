import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import QueryProvider from '@/state/query/QueryProvider';

export const metadata: Metadata = {
  title: 'KR Consult and Investments',
  description: 'Building and Construction in Ghana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-qb-installed="true" suppressHydrationWarning={true}>
      <body cz-shortcut-listen="true">
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
