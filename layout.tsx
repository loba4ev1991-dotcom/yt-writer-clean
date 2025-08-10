export const metadata = {
  title: "YouTube Writer",
  description: "Generate YouTube audio titles and scripts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>{children}</div>
      </body>
    </html>
  );
}
