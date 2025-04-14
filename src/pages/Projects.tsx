
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store built with React, Node.js, and MongoDB',
      details: 'Implemented cart functionality, payment processing, and user authentication.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/johndoe/ecommerce',
      live: 'https://ecommerce-demo.example.com'
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for managing personal and team tasks',
      details: 'Features include drag-and-drop task organization, calendar view, and team collaboration.',
      tech: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/johndoe/taskmanager',
      live: 'https://taskapp-demo.example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps',
      details: 'Integrates with multiple weather APIs to provide comprehensive forecasts and historical data.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
      github: 'https://github.com/johndoe/weather',
      live: 'https://weather-demo.example.com'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7764cc] to-[#1A1F2C] text-white p-6 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-800/50 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
