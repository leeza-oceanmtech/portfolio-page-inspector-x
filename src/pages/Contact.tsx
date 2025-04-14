
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted');
    // In a real application, you would handle form submission here
  };

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
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-400" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/johndoe" className="hover:text-purple-400 transition-colors">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/johndoe" className="hover:text-purple-400 transition-colors">
                  <Linkedin />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C]/80 text-white border-none shadow-xl">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-[#282d3e] border-gray-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-[#282d3e] border-gray-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="How can I help you?" 
                    className="bg-[#282d3e] border-gray-700 min-h-[120px]" 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
