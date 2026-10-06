export const metadata = {
  title: "Tech Solutions",
  description: "Simple company website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}