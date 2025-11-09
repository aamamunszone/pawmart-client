import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: 'Find Your Furry Friend Today!',
      desc: 'Thousands of loving pets are waiting for their forever home.',
      image:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
    },
    {
      id: 2,
      title: "Adopt, Don't Shop — Give a Pet a Home",
      desc: 'Every adoption saves a life and creates a beautiful bond.',
      image:
        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200',
    },
    {
      id: 3,
      title: 'Because Every Pet Deserves Love and Care',
      desc: 'Quality supplies and loving homes for your furry companions.',
      image:
        'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1200',
    },
    {
      id: 4,
      title: 'Rescue a Life, Gain a Friend',
      desc: 'Open your heart and home to a pet in need.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
    },
    {
      id: 5,
      title: 'Your Perfect Companion Awaits',
      desc: 'Browse adoptable pets and find your perfect match today.',
      image:
        'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200',
    },
    {
      id: 6,
      title: 'Premium Pet Supplies for Happy Pets',
      desc: 'Everything your pet needs, from food to toys to care products.',
      image:
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200',
    },
    {
      id: 7,
      title: 'Connect With Local Pet Owners',
      desc: 'A trusted community platform for pet adoption and supplies.',
      image:
        'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200',
    },
    {
      id: 8,
      title: 'Make a Difference Today',
      desc: 'Join thousands of happy pet parents who chose adoption.',
      image:
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200',
    },
    {
      id: 9,
      title: 'Every Tail Has a Story',
      desc: 'Be part of their journey to a loving forever home.',
      image:
        'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200',
    },
    {
      id: 10,
      title: 'Love Begins With Adoption',
      desc: 'Find pets, supplies, and everything you need at PawMart.',
      image:
        'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1200',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[calc(100vh-80px)] relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Parallax effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                  >
                    {/* Title with Gradient */}
                    <motion.h1
                      className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                    >
                      <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                        {slide.title}
                      </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-lg max-w-3xl font-light tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                    >
                      {slide.desc}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full font-bold text-lg shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                      >
                        <span className="group relative z-10 flex items-center gap-2">
                          Explore Pets
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-bold text-lg shadow-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Progress Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-white/70"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
          <span className="text-sm font-medium tracking-wider">Slide</span>
        </div>
        <div className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          {activeIndex + 1} / {slides.length}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
