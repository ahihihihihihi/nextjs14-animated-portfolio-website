'use client'
import Contact from '@/components/landingpage/contact/Contact';
import Cursor from '@/components/landingpage/cursor/Cursor';
import Hero from '@/components/landingpage/hero/Hero';
import Navbar from '@/components/landingpage/navbar/Navbar';
import Parallax from '@/components/landingpage/parallax/Parallax';
import Portfolio from '@/components/landingpage/portfolio/Portfolio';
import Services from '@/components/landingpage/services/services';


export default function Home() {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallax type={'services'} /></section>
      <section><Services /></section>
      <section id='Portfolio'><Parallax type={'portfolio'} /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
      <section style={{ textAlign: 'center' }} id='About'>About</section>
    </div>
  )
}
