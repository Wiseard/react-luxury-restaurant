import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import { Header, About, Menu, Reservation, Footer } from './index'

const App = () => {
  const [ios, setIos] = useState(null)
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  useEffect(() => {
    if (/windows phone/i.test(userAgent)) {
      setIos(false)
    } else if (/android/i.test(userAgent)) {
      setIos(false)
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIos(true)
    }
  }, [])
  return (
    <main>
      <Navbar />
      <Header />
      <About ios={ios} />
      <Menu />
      <Reservation />
      <Footer />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
