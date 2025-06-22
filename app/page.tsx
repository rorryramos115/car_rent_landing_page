import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CarModels from '../components/CarModels';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RentCar Pro - Premium Car Rental Service</title>
        <meta name="description" content="Premium car rental service with luxury vehicles and unbeatable prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <CarModels />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Home;