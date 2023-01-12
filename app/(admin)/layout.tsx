import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="max-w-7xl mx-auto">{children}</body>
    </html>
  )
}
