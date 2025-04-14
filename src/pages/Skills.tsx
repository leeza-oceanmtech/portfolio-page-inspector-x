
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Redux', level: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'REST APIs', level: 90 }
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'Testing (Jest)', level: 75 },
    { name: 'CI/CD', level: 70 }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const SkillCard = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => (
    <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item} className="space-y-2">
              <div className="flex justify-between items-center">
                <span>{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-gray-700" indicatorClassName="bg-purple-500" />
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7764cc] to-[#1A1F2C] text-white p-6 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          My Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Tools & Technologies" skills={otherSkills} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
