// app/layout.tsx
export const metadata = {
  title: "Supabase Keep Alive",
  description: "Prevents Supabase from pausing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
