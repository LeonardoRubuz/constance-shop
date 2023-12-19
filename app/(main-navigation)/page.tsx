import Image from 'next/image'
import Hero from '../components/home/hero'
import ProductsSample from '../components/home/productsSample'
import Transition from '../components/home/transition'
import Testimonials from '../components/home/testimonials'
import Bestsellers from '../components/home/bestsellers'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSample />
      <Transition />
      <Testimonials />
      <Bestsellers />
    </>
  )
}
