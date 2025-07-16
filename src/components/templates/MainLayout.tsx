import React from 'react';
import Header from '../organisms/HeroSection';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="p-8 max-w-4xl mx-auto">{children}</main>
  </div>
);

export default MainLayout; 