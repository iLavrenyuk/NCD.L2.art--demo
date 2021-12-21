import React from 'react';
import { Footer } from '../components/Footer';
import { Dashboard } from '../components/Dashboard';

export const DashboardPage = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto px-6 pt-12 lg:pt-20">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};
