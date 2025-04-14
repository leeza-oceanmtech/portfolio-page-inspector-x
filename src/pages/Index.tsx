
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, Briefcase } from 'lucide-react';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#1A1F2C] text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          John Doe
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8 text-gray-200"
        >
          Full Stack Developer & Creative Technologist
        </motion.h2>
        <div className="flex justify-center space-x-4">
          <Link to="/about">
            <Button variant="secondary" className="flex items-center space-x-2">
              <User />
              <span>About Me</span>
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" className="flex items-center space-x-2">
              <Briefcase />
              <span>My Projects</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;

