import './globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import ScrollInit from '@/components/ScrollInit'

export const metadata = {
  title: '홈페이지 | YOUR_BRAND',
  description: '고객과 함께 성장하는 브랜드입니다. 서비스, 소개, 레퍼런스를 확인하세요.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Nav />
        <Sidebar />
        <ScrollInit />
        {children}
      </body>
    </html>
  )
}
