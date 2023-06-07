
import Header from '@/Components/header/Header'
import './globals.css'
import Footer from '@/Components/footer/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import NewsLetter from '@/Components/Home/NewsLetter';

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
 
        <NewsLetter/>
        <Footer/>
        </body>
    </html>
  )
}
