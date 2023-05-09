import Header from '@/Components/Header'
import './globals.css'
import Footer from '@/Components/Footer'

export const metadata = {
  title: `Men's`,
  description: 'This is an E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
