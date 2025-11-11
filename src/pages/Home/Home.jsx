import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import CategorySection from '../../components/home/CategorySection/CategorySection';
import RecentListings from '../../components/home/RecentListings/RecentListings';
import WhyAdopt from '../../components/home/WhyAdopt/WhyAdopt';
import PetHeroes from '../../components/home/PetHeroes/PetHeroes';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PawMart | Pet Adoption & Supplies</title>
      </Helmet>

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Category Section */}
      <section>
        <CategorySection />
      </section>

      {/* RecentListings Section */}
      <section>
        <RecentListings />
      </section>

      {/* WhyAdopt Section */}
      <section>
        <WhyAdopt />
      </section>

      {/* PetHeroes Section */}
      <section>
        <PetHeroes />
      </section>
    </>
  );
};

export default Home;
