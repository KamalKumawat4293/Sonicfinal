import React from 'react';
import Hero from '../components/Hero';
import Coverage from '../components/Coverage';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Innovation from '../components/Innovation';
import CustomerExperience from '../components/CustomerExperience';
import Onboarding from '../components/Onboarding';
import Industries from '../components/Industries';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Coverage />
      <Benefits />
      <Services />
      <Innovation />
      <CustomerExperience />
      <Onboarding />
      <Industries />
      <Newsletter />
      <Testimonials />
    </div>
  );
}