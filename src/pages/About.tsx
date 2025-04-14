
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7764cc] to-[#1A1F2C] text-white p-6 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-3xl"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h1>

        <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl mb-6">
          <CardHeader>
            <CardTitle>Who I Am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I'm John Doe, a passionate Full Stack Developer with 5+ years of 
              experience building web applications. With a background in computer 
              science and a love for elegant solutions, I create software that 
              solves real-world problems.
            </p>
            <p>
              I specialize in React, Node.js, and modern JavaScript frameworks, 
              bringing ideas to life with clean, maintainable code. My approach 
              combines technical excellence with an eye for design and user experience.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl">
          <CardHeader>
            <CardTitle>My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I started my coding journey during college, where I discovered my 
              passion for web development. After graduating, I joined a tech startup 
              where I developed my skills working on challenging projects.
            </p>
            <p>
              Since then, I've worked with various companies and clients, from 
              startups to enterprise organizations. Each project has taught me 
              valuable lessons about crafting effective software solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or enjoying outdoor activities 
              like hiking and photography.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;
