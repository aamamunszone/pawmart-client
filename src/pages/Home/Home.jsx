import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import CategorySection from '../../components/home/CategorySection/CategorySection';
import RecentListings from '../../components/home/RecentListings/RecentListings';
import WhyAdopt from '../../components/home/WhyAdopt/WhyAdopt';
import PetHeroes from '../../components/home/PetHeroes/PetHeroes';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import BlogSection from '../../components/home/BlogSection/BlogSection';
import Newsletter from '../../components/home/Newsletter/Newsletter';
import FAQ from '../../components/home/FAQ/FAQ';
import CTASection from '../../components/home/CTASection/CTASection';

const Home = () => {
  return (
    <>
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

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

      {/* Blog Section */}
      <section>
        <BlogSection />
      </section>

      {/* Newsletter Section */}
      <section>
        <Newsletter />
      </section>

      {/* FAQ Section */}
      <section>
        <FAQ />
      </section>

      {/* CTA Section */}
      <section>
        <CTASection />
      </section>
    </>
  );
};

export default Home;
