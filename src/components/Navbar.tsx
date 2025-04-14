
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Award, Send } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1F2C] text-white p-4 z-50">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex flex-col items-center">
          <Home />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center">
          <User />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link to="/projects" className="flex flex-col items-center">
          <Briefcase />
          <span className="text-xs mt-1">Projects</span>
        </Link>
        <Link to="/skills" className="flex flex-col items-center">
          <Award />
          <span className="text-xs mt-1">Skills</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center">
          <Send />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

