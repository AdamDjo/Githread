import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { clsx } from 'clsx';
import { Header } from '@/src/feature/layout/Header';
import Footer from '@/src/feature/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Githread App',
  description: 'Generated by  Adam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(inter.className, 'bg-background h-full')}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header></Header>
            <div className="flex-1 max-w-xl m-auto py-12 w-full">
              {children}
            </div>{' '}
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
