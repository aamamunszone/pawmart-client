import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import CategorySection from '../../components/home/CategorySection/CategorySection';

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
    </div>
  );
};

export default Home;
