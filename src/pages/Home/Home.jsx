import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import CategorySection from '../../components/home/CategorySection/CategorySection';
import RecentListings from '../../components/home/RecentListings/RecentListings';
import WhyAdopt from '../../components/home/WhyAdopt/WhyAdopt';
import PetHeroes from '../../components/home/PetHeroes/PetHeroes';

const Home = () => {
  return (
    <div>
      <title>PawMart | Pet Adoption & Supplies</title>

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
    </div>
  );
};

export default Home;
