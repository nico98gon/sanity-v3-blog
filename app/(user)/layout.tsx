import { Banner } from "../../components/Banner"
import Header from "../../components/Header"
import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}